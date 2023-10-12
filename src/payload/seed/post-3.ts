import type { Post } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const post3: Partial<Post> = {
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
            text: 'Dollar and Sense: The Financial Forecast',
          },
        ],
        type: 'h1',
      },
    ]) as any,
    type: 'lowImpact',
  },
  layout: [
    {
      blockName: 'Overview',
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: "Money, in its essence, transcends the mere concept of coins and paper notes; it becomes a profound language that speaks of value, trust, and societal structures. Like any language, it possesses intricate nuances and subtleties that require a discerning understanding. It's in these depths where the calculated world of financial strategy collides with the raw, instinctive nature of human intuition. Just as a seasoned linguist might dissect the syntax and semantics of a sentence, a financial expert navigates the vast and tumultuous ocean of finance, guided not only by logic and data but also by gut feelings and foresight. Every transaction, investment, and financial decision becomes a dialogue in this expansive lexicon of commerce and value.",
                },
              ],
              type: 'h3',
            },
          ]) as any,
          size: 'full',
        },
      ],
    },
    {
      blockName: 'Stock Market Dynamics: Bulls, Bears, and the Uncertain Middle',
      blockType: 'contentMedia',
      media: '{{IMAGE-2}}',
      mediaPosition: 'right',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'STOCK MARKET DYNAMICS: BULLS, BEARS, AND THE UNCERTAIN MIDDLE',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'The stock market is a realm of vast opportunity but also poses risks. Discover the forces that drive market trends and the strategies employed by top traders to navigate this complex ecosystem. From market analysis to understanding investor psychology, get a comprehensive insight into the world of stocks.',
            },
          ],
        },
        {
          children: [
            {
              text: "The stock market, often visualized as a bustling arena of numbers and ticker tapes, is as much about human behavior as it is about economics. It's a place where optimism, represented by the bullish rally, meets the caution of bearish downturns, with each vying to dictate the market's direction. But between these two extremes lies an uncertain middle ground, a zone populated by traders and investors who constantly weigh hope against fear. Successful navigation requires more than just financial acumen; it demands an understanding of collective sentiments and the ability to predict not just market movements, but also the reactions of other market participants. In this intricate dance of numbers and nerves, the most astute players are those who master both the hard data and the soft nuances of human behavior.",
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
      "Money isn't just currency; it's a language. Dive deep into its nuances, where strategy meets intuition in the vast sea of finance.",
    image: '{{IMAGE-1}}',
    title: 'Dollar and Sense: The Financial Forecast',
  },
  premiumContent: [
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
  slug: 'dollar-sense',
  title: 'Dollar and Sense: The Financial Forecast',
}
