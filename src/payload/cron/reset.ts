import fs from 'fs'
import { MongoClient } from 'mongodb'
import path from 'path'
import payload from 'payload'

import { home } from '../seed/home'
import { image1 } from '../seed/image-1'
import { image2 } from '../seed/image-2'
import { post1 } from '../seed/post-1'
import { post2 } from '../seed/post-2'
import { post3 } from '../seed/post-3'
import { postsPage } from '../seed/posts-page'
import { project1 } from '../seed/project-1'
import { project2 } from '../seed/project-2'
import { project3 } from '../seed/project-3'
import { projectsPage } from '../seed/projects-page'

const collections = ['categories', 'media', 'pages', 'posts', 'projects', 'comments']
const globals = ['header', 'settings', 'footer']

export async function seed(): Promise<void> {
  try {
    payload.logger.info(`Seeding database...`)

    payload.logger.info(`— Clearing media...`)

    const mediaDir = path.resolve(__dirname, '../../media')
    if (fs.existsSync(mediaDir)) {
      fs.rmdirSync(mediaDir, { recursive: true })
    }

    payload.logger.info(`— Clearing collections and globals...`)

    await seedData()
    payload.logger.info(`Seed Complete.`)
  } catch (error: unknown) {
    console.error(error) // eslint-disable-line no-console
    payload.logger.error('Error seeding database.')
  }
}

export async function reset(): Promise<void> {
  try {
    payload.logger.info(`Resetting database...`)

    const mediaDir = path.resolve(__dirname, '../../media')
    if (fs.existsSync(mediaDir)) {
      fs.rmSync(path.resolve(__dirname, '../../media'), { recursive: true })
    }

    await dropDB()
    await seedData()
    payload.logger.info(`Reset Complete.`)
  } catch (error: unknown) {
    console.error(error) // eslint-disable-line no-console
    payload.logger.error('Error resetting database.')
  }
}

async function dropDB(): Promise<void> {
  const client = await MongoClient.connect(process.env.DATABASE_URI)
  const db = client.db(new URL(process.env.DATABASE_URI).pathname.substring(1))
  await db.dropDatabase()
}

async function seedData(): Promise<void> {
  payload.logger.info(`— Seeding demo author and user...`)

  const [{ id: demoAuthorID }, { id: demoUserID }] = await Promise.all([
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo@payloadcms.com',
        name: 'Demo Author',
        password: 'demo',
        roles: ['admin'],
      },
    }),
    await payload.create({
      collection: 'users',
      data: {
        email: 'demo-user@payloadcms.com',
        name: 'Demo User',
        password: 'password',
        roles: ['user'],
      },
    }),
  ])

  payload.logger.info(`— Seeding media...`)

  const [image1Doc, image2Doc] = await Promise.all([
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, 'image-1.jpg'),
      data: image1,
    }),
    await payload.create({
      collection: 'media',
      filePath: path.resolve(__dirname, 'image-2.jpg'),
      data: image2,
    }),
  ])

  payload.logger.info(`— Seeding categories...`)

  const [
    technologyCategory,
    newsCategory,
    financeCategory,
    designCat,
    softwareCat,
    engineeringCat,
  ] = await Promise.all([
    await payload.create({
      collection: 'categories',
      data: {
        title: 'Technology',
      },
    }),
    await payload.create({
      collection: 'categories',
      data: {
        title: 'News',
      },
    }),
    await payload.create({
      collection: 'categories',
      data: {
        title: 'Finance',
      },
    }),
    await payload.create({
      collection: 'categories',
      data: {
        title: 'Design',
      },
    }),
    await payload.create({
      collection: 'categories',
      data: {
        title: 'Software',
      },
    }),
    await payload.create({
      collection: 'categories',
      data: {
        title: 'Engineering',
      },
    }),
  ])

  payload.logger.info(`— Seeding posts...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedOn` and they will be in the expected order
  const post1Doc = await payload.create({
    collection: 'posts',
    data: JSON.parse(
      JSON.stringify({ ...post1, categories: [technologyCategory.id] })
        .replace(/{{IMAGE}}/g, image1Doc.id)
        .replace(/{{AUTHOR}}/g, demoAuthorID),
    ),
  })

  const post2Doc = await payload.create({
    collection: 'posts',
    data: JSON.parse(
      JSON.stringify({ ...post2, categories: [newsCategory.id] })
        .replace(/{{IMAGE}}/g, image1Doc.id)
        .replace(/{{AUTHOR}}/g, demoAuthorID),
    ),
  })

  const post3Doc = await payload.create({
    collection: 'posts',
    data: JSON.parse(
      JSON.stringify({ ...post3, categories: [financeCategory.id] })
        .replace(/{{IMAGE}}/g, image1Doc.id)
        .replace(/{{AUTHOR}}/g, demoAuthorID),
    ),
  })

  const posts = [post1Doc, post2Doc, post3Doc]

  // update each post with related posts

  await Promise.all([
    await payload.update({
      collection: 'posts',
      id: post1Doc.id,
      data: {
        relatedPosts: [post2Doc.id, post3Doc.id],
      },
    }),
    await payload.update({
      collection: 'posts',
      id: post2Doc.id,
      data: {
        relatedPosts: [post1Doc.id, post3Doc.id],
      },
    }),
    await payload.update({
      collection: 'posts',
      id: post3Doc.id,
      data: {
        relatedPosts: [post1Doc.id, post2Doc.id],
      },
    }),
  ])

  payload.logger.info(`— Seeding comments...`)

  await Promise.all(
    posts.map(
      async (post, index) =>
        await payload.create({
          collection: 'comments',
          data: {
            _status: 'published',
            comment: `This is a comment on post ${index + 1
              }. It has been approved by an admin and is now visible to the public. You can leave your own comment on this post using the form below.`,
            user: demoUserID,
            doc: post.id,
          },
        }),
    ),
  )

  payload.logger.info(`— Seeding projects...`)

  // Do not create posts with `Promise.all` because we want the posts to be created in order
  // This way we can sort them by `createdAt` or `publishedOn` and they will be in the expected order
  const project1Doc = await payload.create({
    collection: 'projects',
    data: JSON.parse(
      JSON.stringify({ ...project1, categories: [designCat.id] }).replace(
        /{{IMAGE}}/g,
        image2Doc.id,
      ),
    ),
  })

  const project2Doc = await payload.create({
    collection: 'projects',
    data: JSON.parse(
      JSON.stringify({ ...project2, categories: [softwareCat.id] }).replace(
        /{{IMAGE}}/g,
        image2Doc.id,
      ),
    ),
  })

  const project3Doc = await payload.create({
    collection: 'projects',
    data: JSON.parse(
      JSON.stringify({ ...project3, categories: [engineeringCat.id] }).replace(
        /{{IMAGE}}/g,
        image2Doc.id,
      ),
    ),
  })

  // update each project with related projects

  await Promise.all([
    await payload.update({
      collection: 'projects',
      id: project1Doc.id,
      data: {
        relatedProjects: [project2Doc.id, project3Doc.id],
      },
    }),
    await payload.update({
      collection: 'projects',
      id: project2Doc.id,
      data: {
        relatedProjects: [project1Doc.id, project3Doc.id],
      },
    }),
    await payload.update({
      collection: 'projects',
      id: project3Doc.id,
      data: {
        relatedProjects: [project1Doc.id, project2Doc.id],
      },
    }),
  ])

  payload.logger.info(`— Seeding posts page...`)

  const { id: postsPageID } = await payload.create({
    collection: 'pages',
    data: JSON.parse(JSON.stringify(postsPage).replace(/{{IMAGE}}/g, image1Doc.id)),
  })

  payload.logger.info(`— Seeding projects page...`)

  const { id: projectsPageID } = await payload.create({
    collection: 'pages',
    data: JSON.parse(JSON.stringify(projectsPage).replace(/{{IMAGE}}/g, image1Doc.id)),
  })

  payload.logger.info(`— Seeding home page...`)

  await payload.create({
    collection: 'pages',
    data: JSON.parse(
      JSON.stringify(home)
        .replace(/{{IMAGE_1}}/g, image1Doc.id)
        .replace(/{{IMAGE_2}}/g, image2Doc.id)
        .replace(/{{POSTS_PAGE_ID}}/g, postsPageID)
        .replace(/{{PROJECTS_PAGE_ID}}/g, projectsPageID),
    ),
  })

  payload.logger.info(`— Seeding settings...`)

  await payload.updateGlobal({
    slug: 'settings',
    data: {
      postsPage: postsPageID,
      projectsPage: projectsPageID,
    },
  })

  payload.logger.info(`— Seeding header...`)

  await payload.updateGlobal({
    slug: 'header',
    data: {
      navItems: [
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: postsPageID,
            },
            label: 'Posts',
          },
        },
        {
          link: {
            type: 'reference',
            reference: {
              relationTo: 'pages',
              value: projectsPageID,
            },
            label: 'Projects',
          },
        },
      ],
    },
  })

  payload.logger.info('Seeded database successfully!')
}
