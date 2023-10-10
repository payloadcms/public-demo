import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const projectEng: Media = {
  alt: 'Engineering',
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
          url: 'https://unsplash.com/@thisisengineering',
          newTab: true,
          children: [
            {
              text: 'ThisisEngineering RAEng',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/SyRlD4s_amw',
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

export const projectEng2 = {
  alt: 'Engineering',
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
          url: 'https://unsplash.com/@thisisengineering',
          newTab: true,
          children: [
            {
              text: 'ThisisEngineering RAEng',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/hoivM01c-vg',
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

export const projectEng3 = {
  alt: 'Software Development',
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
          url: 'https://unsplash.com/@vishnumaiea',
          newTab: true,
          children: [
            {
              text: 'Vishnu Mohanan',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/pfR18JNEMv8',
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

export const projectEng4 = {
  alt: 'Engineering',
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
          url: 'https://unsplash.com/@thisisengineering',
          newTab: true,
          children: [
            {
              text: 'ThisisEngineering RAEng',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/nyAzMQ6Ejgs',
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
