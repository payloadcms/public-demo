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

export const postTechIot: Media = {
  alt: 'Internet of things',
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
          url: 'https://unsplash.com/@andresurena?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Andres Urena',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/tsBropDpnwE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postTechQuant: Media = {
  alt: 'Quantum computing',
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
          url: 'https://unsplash.com/@traumhaendler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Steffen Junginger',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/1N2OGvrLApM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postTechAi: Media = {
  alt: 'Ai & Machine learning',
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
          url: 'https://unsplash.com/@ikukevk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Kevin Ku',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/w7ZyuGYNpRQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
