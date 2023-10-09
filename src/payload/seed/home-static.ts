import type { Page } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const staticHome: Page = {
  id: '',
  title: 'Home',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'Payload CMS | Public Demo',
    description: 'An open-source website demo built with Payload and Next.js.',
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
                    text: 'Finally, a CMS that works the way you do.',
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
                format: '',
                indent: 0,
                type: 'link',
                version: 1,
                fields: {
                  doc: null,
                  linkType: 'custom',
                  newTab: true,
                  url: 'https://github.com/payloadcms/public-demo',
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
              text: " and start managing this site's content.",
            },
          ],
        },
      ]) as any,
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
