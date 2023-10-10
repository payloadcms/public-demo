import type { Page } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const projectsPage: Partial<Page> = {
  title: 'Projects',
  slug: 'projects',
  _status: 'published',
  meta: {
    title: 'Payload Website Template',
    description: 'An open-source website built with Payload and Next.js.',
    image: '{{IMAGE}}',
  },
  hero: {
    type: 'lowImpact',
    richText: convertSlateToLexical([
      {
        type: 'h1',
        children: [
          {
            text: 'All projects',
          },
        ],
      },
    ]) as any,
    media: undefined,
  },
  layout: [
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      introContent: convertSlateToLexical([
        {
          type: 'p',
          children: [
            {
              text: 'The projects below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or projects can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.',
            },
          ],
        },
      ]) as any,
      populateBy: 'collection',
      relationTo: 'projects',
      limit: 10,
      categories: [],
    },
  ],
}
