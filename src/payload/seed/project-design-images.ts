import type { Media } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const projectDesign: Media = {
  id: '',
  alt: 'UI / UX Design',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Daniel Korpai',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@danielkorpai',
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
          url: 'https://unsplash.com/photos/bOKIptPzdPk',
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

export const projectDesign2 = {
  id: '',
  alt: 'UI / UX Design',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Faizur Rehman',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@fazurrehman',
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
          url: 'https://unsplash.com/photos/dJpupM4LiS4',
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

export const projectDesign3 = {
  id: '',
  alt: 'UI / UX Design',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Balázs Kétyi',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@balazsketyi',
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
          url: 'https://unsplash.com/photos/LPWl2pEVGKc',
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
