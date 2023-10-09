import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'Payload Website Template',
    description: 'An open-source website built with Payload and Next.js.',
  },
  hero: {
    type: 'lowImpact',
    links: null,
    richText: {
      root: {
        type: 'root',
        format: '',
        indent: 0,
        version: 1,
        children: [
          {
            children: [
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Payload Website Template',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'heading',
                version: 1,
                tag: 'h1',
              },
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'Welcome to your website! ',
                type: 'text',
                version: 1,
              },
              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: 'Your database is currently empty.',
                type: 'text',
                version: 1,
              },
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: ' To seed your database with a few pages, posts, and projects, ',
                type: 'text',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'log in to the admin dashboard',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'link',
                version: 1,
                fields: {
                  doc: null,
                  linkType: 'custom',
                  newTab: false,
                  url: 'http://localhost:3000/admin',
                },
              },
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: ' and click "seed your database". If you have already seeded your database, ',
                type: 'text',
                version: 1,
              },
              {
                detail: 0,
                format: 1,
                mode: 'normal',
                style: '',
                text: 'you may need to hard refresh this page to clear the cached request.',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: 'start',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'The code for this template is completely open-source and can be found ',
                type: 'text',
                version: 1,
              },
              {
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'here',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                type: 'link',
                version: 1,
                fields: {
                  doc: null,
                  linkType: 'custom',
                  newTab: true,
                  url: 'https://github.com/payloadcms/payload/tree/master/templates/website',
                },
              },
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: '.',
                type: 'text',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: 'start',
            indent: 0,
            type: 'paragraph',
            version: 1,
          },
        ],
        direction: 'ltr',
      },
    } as any,
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'Seed your database',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'Your database is currently empty. To seed your database, ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'log in to the admin dashboard',
                },
              ],
            },
            {
              text: ' and click "seed your database".',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/admin',
            label: 'Go to dashboard',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
