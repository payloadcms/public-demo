import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const imageSpheres: Media = {
  alt: 'Abstract Spheres in Black and White',
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
          url: 'https://unsplash.com/@sebastiansvenson',
          newTab: true,
          children: [
            {
              text: 'Sebastian Svensson',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/xVRwS5fGJJQ',
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
