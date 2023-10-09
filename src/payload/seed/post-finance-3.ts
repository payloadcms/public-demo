import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postFinance3: Media = {
  alt: 'Finance',
  id: '',
  createdAt: '',
  updatedAt: '',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/@verneho?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Verne Ho',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/0LAJfSNa-xQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Unsplash',
            },
          ],
        },
        {
          text: '.',
        },
      ],
    },
  ]) as any,
}
