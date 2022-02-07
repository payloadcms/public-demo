import payload from 'payload';
import path from 'path';
import fs from 'fs';
import { User } from '../payload-types';
import { MongoClient } from 'mongodb';
import { generateContactFormSubmission, generateMailingListSubmission } from '../data/forms/submissionGenerator';
import { homeData } from '../data/pages/homeData';
import { homeDataDE } from '../data/pages/homeDataDE';
import { homeDataES } from '../data/pages/homeDataES';
import { videoSeriesData } from '../data/pages/videoSeriesData';
import { caseStudiesData } from '../data/pages/caseStudiesData';
import { contactFormData } from '../data/forms/contactFormData';
import { mailingListFormData } from '../data/forms/mailingListFormData';
import { generateTsInterfacesData } from '../data/posts/generateTsInterfacesData';
import { whiteLabelAdminUIData } from '../data/posts/whiteLabelAdminUIData';
import { buildWebsiteData } from '../data/posts/buildWebsiteData';
import { introducingPayloadData } from '../data/posts/introducingPayloadData';

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
  const { id: demoUserId } = await payload.create<User>({
    collection: 'users',
    data: {
      name: 'Demo User',
      email: 'demo@payloadcms.com',
      password: 'demo',
    },
  });

  const { id: imageId } = await payload.create<any>({
    collection: 'media',
    data: {
      alt: 'Payload',
    },
    filePath: path.resolve(__dirname, './payload.jpg'),
  });

  // Page - Home
  const homeString = homeData(imageId, demoUserId);
  const homeStringDE = homeDataDE(imageId, demoUserId);
  const homeStringES = homeDataES(imageId, demoUserId);

  const { id: homeDocId } = await payload.create<any>({
    collection: 'pages',
    data: homeString,
  });

  // Page - Video Series
  await payload.create<any>({
    collection: 'pages',
    data: videoSeriesData(imageId, demoUserId, homeDocId),
  });

  // Page - Case Studies
  await payload.create<any>({
    collection: 'pages',
    data: caseStudiesData(imageId, demoUserId, homeDocId),
  });

  // TEMPORARY - bug with breadcrumbs plugin. Home page resaves automatically after creation.
  // I'm thinking that `de` simply got fired too early and overwritten.

  setTimeout(async () => {
    await payload.update({
      collection: 'pages',
      id: homeDocId,
      locale: 'de',
      data: homeStringDE,
    })

    await payload.update({
      collection: 'pages',
      id: homeDocId,
      locale: 'es',
      data: homeStringES,
    })
  }, 3000);

  // Forms - Contact
  const contactForm = await payload.create<any>({
    collection: 'forms',
    data: contactFormData(),
  });
  // Forms - Mailing List
  const mailingListForm = await payload.create<any>({
    collection: 'forms',
    data: mailingListFormData(),
  });

  // Generate form submissions
  const contactFormSubmissions = [...Array(5)].map(_ => {
    return payload.create<any>({
      collection: 'form-submissions',
      data: generateContactFormSubmission(contactForm.id)
    });
  })
  await Promise.all(contactFormSubmissions);

  const mailingListSubmissions = [...Array(5)].map(_ => {
    return payload.create<any>({
      collection: 'form-submissions',
      data: generateMailingListSubmission(mailingListForm.id)
    });
  })
  await Promise.all(mailingListSubmissions);

  // Create Categories
  const [newsCategory, featureCategory, tutorialCategory] = await Promise.all([
    payload.create<any>({
      collection: 'categories',
      data: {
        name: 'news'
      }
    }),
    payload.create<any>({
      collection: 'categories',
      data: {
        name: 'feature'
      }
    }),
    payload.create<any>({
      collection: 'categories',
      data: {
        name: 'tutorial'
      }
    }),
  ])

  await payload.create<any>({
    collection: 'posts',
    data: generateTsInterfacesData(demoUserId, featureCategory.id, imageId),
  })
  await payload.create<any>({
    collection: 'posts',
    data: whiteLabelAdminUIData(demoUserId, tutorialCategory.id, imageId),
  })
  await payload.create<any>({
    collection: 'posts',
    data: buildWebsiteData(demoUserId, tutorialCategory.id, imageId),
  })
  await payload.create<any>({
    collection: 'posts',
    data: introducingPayloadData(demoUserId, newsCategory.id, imageId),
  })
}
