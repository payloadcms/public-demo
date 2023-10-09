import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postNews2: Media = {
  alt: 'News',
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
          url: 'https://unsplash.com/@bogomi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Bogomil Mihaylov',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/ekHSHvgr27k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
