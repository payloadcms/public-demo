import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postTech1: Media = {
  alt: 'Technology',
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
          url: 'https://unsplash.com/@szolkin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Sergey Zolkin',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/_UeY8aTI6d0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
