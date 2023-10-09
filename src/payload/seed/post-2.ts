import type { Post } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const post2: Partial<Post> = {
  title: 'Global Gaze: Beyond the Headlines',
  slug: 'global-gaze',
  _status: 'published',
  meta: {
    title: 'Global Gaze: Beyond the Headlines',
    description:
      'Explore the untold and overlooked. A magnified view into the corners of the world, where every story deserves its spotlight.',
    image: '{{IMAGE}}',
  },
  authors: ['{{AUTHOR}}'],
  hero: {
    type: 'lowImpact',
    links: null,
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'Global Gaze: Beyond the Headlines',
          },
        ],
        type: 'h1',
      },
    ]) as any,
    media: null,
  },
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: "This content is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                },
              ],
            },
          ]) as any,
          link: {
            reference: {
              relationTo: 'pages',
              value: '',
            },
            url: '',
            label: '',
          },
        },
      ],
    },
  ],
  enablePremiumContent: true,
  premiumContent: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'This is premium content.',
                  bold: true,
                },
                {
                  text: ' It is only available to authenticated users. This content can be anything from additional video, text, and content, to download links and more. These are simply layout building blocks configured in the CMS.',
                },
              ],
            },
          ]) as any,
          link: {
            reference: {
              relationTo: 'pages',
              value: '',
            },
            url: '',
            label: '',
          },
        },
      ],
    },
  ],
  relatedPosts: [], // this is populated by the seed script
}
