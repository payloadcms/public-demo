import type { Media } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postFinance3: Media = {
  id: '',
  alt: 'Finance',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Verne Ho',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@verneho?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/0LAJfSNa-xQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postFinanceBuildings: Media = {
  id: '',
  alt: 'Finance Buildings',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Sean Pollock',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@seanpollock?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/PhYq704ffdA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postFinanceStocks: Media = {
  id: '',
  alt: 'Stock Market',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Nick Chong',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@nick604?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/N__BnvQ_w18?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
