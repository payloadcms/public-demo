import type { Page } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const projectsPage: Partial<Page> = {
  _status: 'published',
  hero: {
    media: undefined,
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'All projects',
          },
        ],
        type: 'h1',
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
              text: 'The projects below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or projects can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.',
            },
          ],
          type: 'p',
        },
      ]) as any,
      limit: 10,
      populateBy: 'collection',
      relationTo: 'projects',
    },
  ],
  meta: {
    description: 'An open-source website built with Payload and Next.js.',
    image: '{{IMAGE}}',
    title: 'Projects',
  },
  slug: 'projects',
  title: 'Projects',
}
