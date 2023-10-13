import type { Page } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postsPage: Partial<Page> = {
  _status: 'published',
  hero: {
    media: undefined,
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'All posts',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text: 'This page displays all or some of the posts of your blog. Each post is complete with a dynamic page layout builder for a completely custom user experience that is under your full control.',
          },
        ],
        type: 'p',
      },
    ]) as any,
    type: 'lowImpact',
  },
  layout: [
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      categories: [],
      introContent: convertSlateToLexical([
        {
          children: [
            {
              text: 'All posts',
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
      limit: 10,
      populateBy: 'collection',
      relationTo: 'posts',
    },
  ],
  meta: {
    description: 'An open-source website built with Payload and Next.js.',
    image: '{{IMAGE}}',
    title: 'Posts',
  },
  slug: 'posts',
  title: 'Posts',
}
