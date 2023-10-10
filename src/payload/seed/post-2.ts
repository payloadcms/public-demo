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
    image: '{{IMAGE-1}}',
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
      blockType: 'contentMedia',
      blockName: 'The Power of Resilience',
      mediaPosition: 'right',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'THE POWER OF RESILIENCE: STORIES OF RECOVERY AND HOPE',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: "Throughout history, regions across the globe have faced the devastating impact of natural disasters, the turbulence of political unrest, and the challenging ripples of economic downturns. In these moments of profound crisis, an often-underestimated force emerges: the indomitable resilience of the human spirit. These aren't just tales of mere survival, but stories of communities forging bonds, uniting with a collective purpose, and demonstrating an innate ability to overcome.",
            },
          ],
        },
        {
          children: [
            {
              text: 'From neighbors forming makeshift rescue teams during floods to entire cities rallying to rebuild after economic collapse, the essence of humanity is most evident in these acts of solidarity. As we delve into these narratives, we witness the transformative power of community spirit, where adversity becomes a catalyst for growth, unity, and a brighter, rebuilt future.',
            },
          ],
        },
      ]) as any,
      media: '{{IMAGE-2}}',
    },
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
      blockName: 'Hidden Treasures',
      columns: [
        {
          size: 'full',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'HIDDEN TREASURES: REMOTE DESTINATIONS UNVEILED',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Beyond the well-trodden tourist trails lie hidden gems waiting to be explored. From untouched beaches to ancient ruins, these remote destinations offer pristine beauty and rich history, providing a unique window into the past and present.',
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
    {
      position: 'default',
      media: '{{IMAGE-3}}',
      blockType: 'mediaBlock',
      blockName: 'Feature Image',
    },
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
