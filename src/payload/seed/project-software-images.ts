import type { Media } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const projectSoftware: Media = {
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
          url: 'https://unsplash.com/@afgprogrammer',
          newTab: true,
          children: [
            {
              text: 'Mohammad Rahmani',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/N5bT5RctFZ8',
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

export const projectSoftware2 = {
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
          url: 'https://unsplash.com/@umby',
          newTab: true,
          children: [
            {
              text: 'Umberto',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/FewHpO4VC9Y',
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

export const projectSoftware3 = {
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
          url: 'https://unsplash.com/@maximalfocus',
          newTab: true,
          children: [
            {
              text: 'Maximalfocus',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/VT4rx775FT4',
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

export const projectSoftware4 = {
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
          url: 'https://unsplash.com/@adigold1',
          newTab: true,
          children: [
            {
              text: 'Adi Goldstein',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/EUsVwEOsblE',
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
