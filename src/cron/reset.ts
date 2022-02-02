import payload from 'payload';
import path from 'path';
import fs from 'fs';
import { User } from '../payload-types';
import { MongoClient } from 'mongodb';

const home = require('../data/home.json');
const homeDE = require('../data/homeDE.json');
const homeES = require('../data/homeES.json');
const videoSeriesPage = require('../data/video-series.json');
const caseStudiesPage = require('../data/case-studies.json');
const contactForm = require('../data/forms/contact-form.json');
const mailingListForm = require('../data/forms/mailing-list-form.json');

export async function reset() {
  try {
    payload.logger.info(`Resetting database...`);
    fs.rmSync(path.resolve(__dirname, '../../media'), { recursive: true });
    await dropDB();
    await seedData();
    payload.logger.info(`Reset Complete.`);
  } catch (error) {
    console.error(error);
    payload.logger.error('Error resetting database.');
  }
}

async function dropDB() {
  const client = await MongoClient.connect(process.env.MONGO_URL);
  const db = client.db(new URL(process.env.MONGO_URL).pathname.substring(1));
  await db.dropDatabase();
}

async function seedData() {
  const demoUser = await payload.create<User>({
    collection: 'users',
    data: {
      name: 'Demo User',
      email: 'demo@payloadcms.com',
      password: 'demo',
    },
  });

  const createdMedia = await payload.create<any>({
    collection: 'media',
    data: {
      alt: 'Payload',
    },
    filePath: path.resolve(__dirname, './payload.jpg'),
  });

  // Page - Home
  const homeString = JSON.stringify(home)
    .replace(/{{IMAGE_ID}}/g, createdMedia.id)
    .replace(/{{USER_ID}}/g, demoUser.id);

  const homeStringDE = JSON.stringify(homeDE)
    .replace(/{{IMAGE_ID}}/g, createdMedia.id)
    .replace(/{{USER_ID}}/g, demoUser.id);

  const homeStringES = JSON.stringify(homeES)
    .replace(/{{IMAGE_ID}}/g, createdMedia.id)
    .replace(/{{USER_ID}}/g, demoUser.id);

  const homeDoc = await payload.create<any>({
    collection: 'pages',
    data: JSON.parse(homeString),
  });

  // Page - Video Series
  await payload.create<any>({
    collection: 'pages',
    data: JSON.parse(JSON.stringify(videoSeriesPage)
      .replace(/{{IMAGE_ID}}/g, createdMedia.id)
      .replace(/{{USER_ID}}/g, demoUser.id)
      .replace(/{{PARENT_ID}}/g, homeDoc.id)
    )
  });

  // Page - Case Studies
  await payload.create<any>({
    collection: 'pages',
    data: JSON.parse(JSON.stringify(caseStudiesPage)
      .replace(/{{IMAGE_ID}}/g, createdMedia.id)
      .replace(/{{USER_ID}}/g, demoUser.id)
      .replace(/{{PARENT_ID}}/g, homeDoc.id)
    )
  });

  // TEMPORARY - bug with breadcrumbs plugin. Home page resaves automatically after creation.
  // I'm thinking that `de` simply got fired too early and overwritten.

  setTimeout(async () => {
    await payload.update({
      collection: 'pages',
      id: homeDoc.id,
      locale: 'de',
      data: JSON.parse(homeStringDE),
    })

    await payload.update({
      collection: 'pages',
      id: homeDoc.id,
      locale: 'es',
      data: JSON.parse(homeStringES),
    })
  }, 3000);

  // Forms - Contact
  await payload.create<any>({
    collection: 'forms',
    data: contactForm
  });
  // Forms - Mailing List
  await payload.create<any>({
    collection: 'forms',
    data: mailingListForm
  });
}
