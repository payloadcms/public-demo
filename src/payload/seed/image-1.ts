import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const image1: Media = {
  alt: 'Shirts',
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
          url: 'https://unsplash.com/@cerpow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          newTab: true,
          children: [
            {
              text: 'Voicu Apostol',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/a-close-up-of-a-pine-tree-branch-Cy1F3H1X3WI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
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
