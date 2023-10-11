import type { Media } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const postNews2: Media = {
  id: '',
  alt: 'News',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Bogomil Mihaylov',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@bogomi?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/ekHSHvgr27k?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postNewsDest: Media = {
  id: '',
  alt: 'Hidden Destination',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'Jamie Davies',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@jamie_davies?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/_sdfPvaJkWU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postNewsHope: Media = {
  id: '',
  alt: 'Recovery and Hope',
  caption: convertSlateToLexical([
    {
      children: [
        {
          text: 'Photo by ',
        },
        {
          children: [
            {
              text: 'John Towner',
            },
          ],
          linkType: 'custom',
          newTab: true,
          type: 'link',
          url: 'https://unsplash.com/@heytowner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
          url: 'https://unsplash.com/photos/3Kv48NS4WUU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
