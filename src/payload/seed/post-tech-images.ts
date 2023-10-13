import type { Media } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postTech1: Media = {
  id: '',
  alt: 'Technology',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Sergey Zolkin',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@szolkin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/_UeY8aTI6d0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postTechIot: Media = {
  id: '',
  alt: 'Internet of things',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Andres Urena',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@andresurena?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/tsBropDpnwE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postTechQuant: Media = {
  id: '',
  alt: 'Quantum computing',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Steffen Junginger',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@traumhaendler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/1N2OGvrLApM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postTechAi: Media = {
  id: '',
  alt: 'Ai & Machine learning',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Kevin Ku',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@ikukevk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/w7ZyuGYNpRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
