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

export const postNewsDest: Media = {
  alt: 'Hidden Destination',
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
          url: 'https://unsplash.com/@jamie_davies?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'Jamie Davies',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/_sdfPvaJkWU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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

export const postNewsHope: Media = {
  alt: 'Recovery and Hope',
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
          url: 'https://unsplash.com/@heytowner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
          newTab: true,
          children: [
            {
              text: 'John Towner',
            },
          ],
        },
        {
          text: ' on ',
        },
        {
          type: 'link',
          linkType: 'custom',
          url: 'https://unsplash.com/photos/3Kv48NS4WUU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
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
