import type { Page } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const home: Partial<Page> = {
  _status: 'published',
  hero: {
    links: [
      {
        link: {
          appearance: 'primary',
          label: 'All posts',
          reference: {
            relationTo: 'pages',
            value: '{{POSTS_PAGE_ID}}',
          },
          type: 'reference',
          url: '',
        },
      },
      {
        link: {
          appearance: 'secondary',
          label: 'All projects',
          reference: {
            relationTo: 'pages',
            value: '{{PROJECTS_PAGE_ID}}',
          },
          type: 'reference',
          url: '',
        },
      },
    ],
    media: '{{IMAGE_1}}',
    richText: {
      root: {
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
            children: [
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
                children: [
                  {
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: 'Visit the admin dashboard ',
                    type: 'text',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                fields: {
                  doc: null,
                  linkType: 'custom',
                  newTab: false,
                  url: '/admin',
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
                text: "to begin managing this site's content. The code for this demo is completely open-source and can be found ",
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
            format: '',
            indent: 0,
            type: 'largeBody',
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
    type: 'highImpact',
  },
  layout: [
    {
      blockName: 'Content Block',
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Core features',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
          ]) as any,
          size: 'full',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Admin Dashboard',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: "Manage this site's pages, posts, projects and more from the ",
                },
                {
                  children: [
                    {
                      text: 'admin dashboard',
                    },
                  ],
                  linkType: 'custom',
                  type: 'link',
                  url: '/admin',
                },
                {
                  text: '.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Authentication',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Complete user ',
                },
                {
                  children: [
                    {
                      text: 'login',
                    },
                  ],
                  linkType: 'custom',
                  type: 'link',
                  url: '/login',
                },
                {
                  text: ' and ',
                },
                {
                  children: [
                    {
                      text: 'create account',
                    },
                  ],
                  linkType: 'custom',
                  type: 'link',
                  url: '/create-account',
                },
                {
                  text: ' flows with email verification and password reset.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },

        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Preview',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Using versions, drafts, and preview, editors can review and share their changes before publishing them.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Comments',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Users can comment on posts and editors can moderate comments directly from the ',
                },
                {
                  children: [
                    {
                      text: 'admin dashboard',
                    },
                  ],
                  linkType: 'custom',
                  type: 'link',
                  url: '/admin/collections/comments',
                },
                {
                  text: '.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'User Accounts',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Users can ',
                },
                {
                  children: [
                    {
                      text: 'manage their account',
                    },
                  ],
                  linkType: 'custom',
                  type: 'link',
                  url: '/account',
                },
                {
                  text: ', view their comment history, and more without leaving the site.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Premium Content',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Easily restrict access to premium content to only authenticated members of your site.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Page Builder',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Custom page builder allows you to create unique page, post, and project layouts for any type of content.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'SEO',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Editors have complete control over SEO data and site content directly from the ',
                },
                {
                  children: [
                    {
                      text: 'admin dashboard',
                    },
                  ],
                  linkType: 'custom',
                  type: 'link',
                  url: '/admin',
                },
                {
                  text: '.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Dark Mode',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'Users will experience this site in their preferred color scheme and each block can be inverted.',
                },
              ],
            },
          ]) as any,
          size: 'oneThird',
        },
      ],
    },
    {
      blockName: 'Media Block',
      blockType: 'mediaBlock',
      media: '{{IMAGE_2}}',
      position: 'default',
    },
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      categories: [],
      introContent: convertSlateToLexical([
        {
          children: [
            {
              text: 'Recent posts',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'The posts below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or posts can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.',
            },
          ],
          type: 'p',
        },
      ]) as any,
      populateBy: 'collection',
      relationTo: 'posts',
    },
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      categories: [],
      introContent: convertSlateToLexical([
        {
          children: [
            {
              text: 'Recent projects',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'The projects below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or projects can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.',
            },
          ],
          type: 'p',
        },
      ]) as any,
      populateBy: 'collection',
      relationTo: 'projects',
    },
    {
      blockName: 'CTA',
      blockType: 'cta',
      links: [
        {
          link: {
            appearance: 'primary',
            label: 'All posts',
            reference: {
              relationTo: 'pages',
              value: '{{POSTS_PAGE_ID}}',
            },
            type: 'reference',
            url: '',
          },
        },
        {
          link: {
            appearance: 'secondary',
            label: 'All projects',
            reference: {
              relationTo: 'pages',
              value: '{{PROJECTS_PAGE_ID}}',
            },
            type: 'reference',
            url: '',
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
              text: 'This is a custom layout building block ',
            },
            {
              children: [
                {
                  text: 'configured in the admin dashboard',
                },
              ],
              linkType: 'custom',
              type: 'link',
              url: '/admin',
            },
            {
              text: '.',
            },
          ],
        },
      ]) as any,
    },
  ],
  meta: {
    description: 'An open-source website demo built with Payload and Next.js.',
    image: '{{IMAGE_1}}',
    title: 'Payload CMS | Public Demo',
  },
  publishedDate: '2023-09-30T23:00:00.000Z',
  slug: 'home',
  title: 'Home',
}
