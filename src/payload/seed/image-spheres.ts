import type { Media } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const imageSpheres: Media = {
  id: '',
  alt: 'Abstract Spheres in Black and White',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Sebastian Svensson',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@sebastiansvenson',
        },
        {
          text: ' on ',
        },
        {
          children: [
            {
              text: 'Unsplash',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/photos/xVRwS5fGJJQ',
        },
        {
          text: '.',
        },
      ],
    },
  ]) as any,
  createdAt: '',
  updatedAt: '',
}
