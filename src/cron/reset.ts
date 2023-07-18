import payload from 'payload';
import path from 'path';
import fs from 'fs';
import { MongoClient } from 'mongodb';
import { generateContactFormSubmission, generateMailingListSubmission } from '../data/forms/submissionGenerator';
import { getHomeData } from '../data/pages/homeData';
import { getHomeDataDE } from '../data/pages/homeDataDE';
import { getHomeDataES } from '../data/pages/homeDataES';
import { getVideoSeriesData } from '../data/pages/videoSeriesData';
import { getCaseStudiesData } from '../data/pages/caseStudiesData';
import { contactFormData } from '../data/forms/contactFormData';
import { mailingListFormData } from '../data/forms/mailingListFormData';
import { generateTsInterfacesData } from '../data/posts/generateTsInterfacesData';
import { whiteLabelAdminUIData } from '../data/posts/whiteLabelAdminUIData';
import { buildWebsiteData } from '../data/posts/buildWebsiteData';
import { introducingPayloadData } from '../data/posts/introducingPayloadData';
import { futurePostData } from '../data/posts/futurePostData'
import { mainMenuData } from '../data/mainMenu/mainMenuData';
import type { Form, MainMenu, Page, Post } from 'payload/generated-types'

export async function seed() {
  try {
    payload.logger.info(`Seeding database...`);

    const mediaDir = path.resolve(__dirname, '../../media');
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, '../../media'), { recursive: true });
    }

    await seedData();
    payload.logger.info(`Seed Complete.`);
  } catch (error) {
    console.error(error);
    payload.logger.error('Error seeding database.');
  }
}

export async function reset() {
  try {
    payload.logger.info(`Resetting database...`);

    const mediaDir = path.resolve(__dirname, '../../media');
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, '../../media'), { recursive: true });
    }

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
  const { id: demoUserId } = await payload.create({
    collection: 'users',
    data: {
      name: 'Demo User',
      email: 'demo@payloadcms.com',
      password: 'demo',
    },
  });

  const { id: imageId } = await payload.create({
    collection: 'media',
    data: {
      alt: 'Payload',
    },
    filePath: path.resolve(__dirname, './payload.jpg'),
  });

  // Page - Home
  const homeData = getHomeData(imageId, demoUserId);
  const homeDataDE = getHomeDataDE(imageId, demoUserId);
  const homeDataES = getHomeDataES(imageId, demoUserId);

  const { id: homeDocId } = await payload.create({
    collection: 'pages',
    // @ts-expect-error
    data: homeData,
  });

  // Page - Video Series
  await payload.create({
    collection: 'pages',
    // @ts-expect-error
    data: getVideoSeriesData(imageId, demoUserId, homeDocId),
  });

  // Page - Case Studies
  const { id: caseStudiesDocId } = await payload.create({
    collection: 'pages',
    // @ts-expect-error
    data: getCaseStudiesData(imageId, demoUserId, homeDocId),
  });

  // Main Menu
  await payload.updateGlobal({
    slug: 'mainMenu',
    data: mainMenuData(homeDocId, caseStudiesDocId) as unknown as MainMenu,
  });

  await payload.update({
    collection: 'pages',
    id: homeDocId,
    locale: 'de',
    data: homeDataDE
  });

  await payload.update({
    collection: 'pages',
    id: homeDocId,
    locale: 'es',
    data: homeDataES
  });

  // Forms - Contact
  const contactForm = await payload.create({
    collection: 'forms',
    data: contactFormData() as unknown as Form,
  });
  
  // Forms - Mailing List
  const mailingListForm = await payload.create({
    collection: 'forms',
    data: mailingListFormData() as unknown as Form,
  });

  // Generate form submissions
  const contactFormSubmissions = [...Array(5)].map(_ => {
    return payload.create({
      collection: 'form-submissions',
      data: generateContactFormSubmission(contactForm.id),
    });
  });

  await Promise.all(contactFormSubmissions);

  const mailingListSubmissions = [...Array(5)].map(_ => {
    return payload.create({
      collection: 'form-submissions',
      data: generateMailingListSubmission(mailingListForm.id),
    });
  });

  await Promise.all(mailingListSubmissions);

  // Create Categories
  const [newsCategory, featureCategory, tutorialCategory] = await Promise.all([
    payload.create({
      collection: 'categories',
      data: {
        name: 'news',
      },
    }),
    payload.create({
      collection: 'categories',
      data: {
        name: 'feature',
      },
    }),
    payload.create({
      collection: 'categories',
      data: {
        name: 'tutorial',
      },
    }),
  ]);

  const ignorePromise = await payload.create({
    collection: 'categories',
    data: {
      name: 'announcements',
      archived: true,
    },
  });

  await payload.create({
    collection: 'posts',
    data: generateTsInterfacesData(demoUserId, featureCategory.id, imageId) as unknown as Post,
  });

  await payload.create({
    collection: 'posts',
    data: whiteLabelAdminUIData(demoUserId, tutorialCategory.id, imageId) as unknown as Post,
  });

  await payload.create({
    collection: 'posts',
    data: buildWebsiteData(demoUserId, tutorialCategory.id, imageId) as unknown as Post,
  });

  await payload.create({
    collection: 'posts',
    data: introducingPayloadData(demoUserId, newsCategory.id, imageId) as unknown as Post,
  });

  await payload.create({
    collection: 'posts',
    data: futurePostData(demoUserId, newsCategory.id, imageId) as unknown as Post,
  });
}
