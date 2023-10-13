import type { Post } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const post2: Partial<Post> = {
  _status: 'published',
  authors: ['{{AUTHOR}}'],
  enablePremiumContent: true,
  hero: {
    links: null,
    media: null,
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
    type: 'lowImpact',
  },
  layout: [
    {
      blockName: 'The Power of Resilience',
      blockType: 'contentMedia',
      media: '{{IMAGE-2}}',
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
    },
    {
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: "This content is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                },
              ],
            },
          ]) as any,
          size: 'twoThirds',
        },
      ],
    },
  ],
  meta: {
    description:
      'Explore the untold and overlooked. A magnified view into the corners of the world, where every story deserves its spotlight.',
    image: '{{IMAGE-1}}',
    title: 'Global Gaze: Beyond the Headlines',
  },
  premiumContent: [
    {
      blockName: 'Hidden Treasures',
      blockType: 'content',
      columns: [
        {
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
          size: 'full',
        },
      ],
    },
    {
      blockName: 'Feature Image',
      blockType: 'mediaBlock',
      media: '{{IMAGE-3}}',
      position: 'default',
    },
    {
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  bold: true,
                  text: 'This is premium content.',
                },
                {
                  text: ' It is only available to authenticated users. This content can be anything from additional video, text, and content, to download links and more. These are simply layout building blocks configured in the CMS.',
                },
              ],
            },
          ]) as any,
          size: 'twoThirds',
        },
      ],
    },
  ],
  relatedPosts: [], // this is populated by the seed script
  slug: 'global-gaze',
  title: 'Global Gaze: Beyond the Headlines',
}
