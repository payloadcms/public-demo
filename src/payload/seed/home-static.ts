import type { Page } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const staticHome: Page = {
  id: '',
  createdAt: '',
  hero: {
    links: null,
    media: '',
    richText: {
      root: {
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
                    text: 'Finally, a CMS that works the way you do.',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                tag: 'h1',
                type: 'heading',
                version: 1,
              },
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: 'No black magic, all TypeScript, and fully open-source. ',
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
                text: 'The code for this demo is completely open-source and can be found ',
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
                fields: {
                  doc: null,
                  linkType: 'custom',
                  newTab: true,
                  url: 'https://github.com/payloadcms/public-demo',
                },
                format: '',
                indent: 0,
                type: 'link',
                version: 1,
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
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    } as any,
    type: 'lowImpact',
  },
  layout: [
    {
      blockName: 'CTA',
      blockType: 'cta',
      links: [
        {
          link: {
            appearance: 'primary',
            label: 'Go to dashboard',
            reference: undefined,
            type: 'custom',
            url: '/admin',
          },
        },
      ],
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'This is a call to action',
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
              children: [
                {
                  text: 'log in to the admin dashboard',
                },
              ],
              linkType: 'custom',
              type: 'link',
              url: '/admin',
            },
            {
              text: " and start managing this site's content.",
            },
          ],
        },
      ]) as any,
    },
  ],
  meta: {
    description: 'An open-source website demo built with Payload and Next.js.',
    title: 'Payload CMS | Public Demo',
  },
  slug: 'home',
  title: 'Home',
  updatedAt: '',
}
