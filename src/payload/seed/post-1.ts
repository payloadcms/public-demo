import type { Post } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'
export const post1: Partial<Post> = {
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
            text: 'Digital Horizons: A Glimpse into Tomorrow',
          },
        ],
        type: 'h1',
      },
    ]) as any,
    type: 'lowImpact',
  },
  layout: [
    {
      blockName: 'Rise of AI and Machine Learning',
      blockType: 'contentMedia',
      media: '{{IMAGE-2}}',
      mediaPosition: 'left',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'THE RISE OF AI AND MACHINE LEARNING',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'We find ourselves in a transformative era where artificial intelligence (AI) stands at the forefront of technological evolution. The ripple effects of its advancements are reshaping industries at an unprecedented pace. No longer are businesses bound by the limitations of tedious, manual processes. Instead, sophisticated machines, fueled by vast amounts of historical data, are now capable of making decisions previously left to human intuition. These intelligent systems are not only optimizing operations but also pioneering innovative approaches, heralding a new age of business transformation worldwide.',
            },
          ],
        },
      ]) as any,
    },
    {
      blockName: 'Internet of things',
      blockType: 'contentMedia',
      media: '{{IMAGE-3}}',
      mediaPosition: 'right',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'IOT: CONNECTING THE WORLD AROUND US',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: "In today's rapidly evolving technological landscape, the Internet of Things (IoT) stands out as a revolutionary force. From transforming our residences with smart home systems to redefining transportation through connected cars, IoT's influence is palpable in nearly every facet of our daily lives.",
            },
          ],
        },
        {
          children: [
            {
              text: "This technology hinges on the seamless integration of devices and systems, allowing them to communicate and collaborate effortlessly. With each connected device, we move a step closer to a world where convenience and efficiency are embedded in the very fabric of our existence. As a result, we're transitioning into an era where our surroundings intuitively respond to our needs, heralding a smarter and more interconnected global community.",
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
                  text: "This content above is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                },
              ],
            },
          ]) as any,
          size: 'full',
        },
      ],
    },
  ],
  meta: {
    description:
      'Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.',
    image: '{{IMAGE-1}}',
    title: 'Digital Horizons: A Glimpse into Tomorrow',
  },
  premiumContent: [
    {
      blockName: 'Feature Image',
      blockType: 'mediaBlock',
      media: '{{IMAGE-4}}',
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
          size: 'full',
        },
      ],
    },
  ],
  relatedPosts: [], // this is populated by the seed script
  slug: 'digital-horizons',
  title: 'Digital Horizons: A Glimpse into Tomorrow',
}
