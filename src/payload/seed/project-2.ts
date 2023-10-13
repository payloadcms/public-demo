import type { Project } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'
export const project2: Partial<Project> = {
  _status: 'published',
  hero: {
    media: '{{IMAGE-1}}',
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'Discover how our latest software release boosted efficiency, reduced road blocks and drove remarkable growth in the tech industry.',
          },
        ],
        type: 'p',
      },
    ]) as any,
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
                  text: 'Software Development',
                },
              ],
              type: 'h6',
            },
          ]) as any,
          size: 'full',
        },
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'We take immense pride in our commitment to delivering exceptional software solutions tailored to our clients unique needs. Our collaboration with the client on the development of Spider Software is a testament to our dedication to innovation and client success.',
                },
              ],
              type: 'h3',
            },
          ]) as any,
          size: 'twoThirds',
        },
        {
          enableLink: true,
          link: {
            appearance: 'primary',
            label: 'View on GitHub',
            reference: undefined,
            type: 'custom',
            url: 'https://www.payloadcms.com',
          },
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Digital Pioneer Prize `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Innovation Excellence Award `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Top 10 Forbes Software `23',
                },
              ],
              type: 'h6',
            },
          ]) as any,
          size: 'oneThird',
        },
      ],
    },
    {
      blockName: 'Challenges',
      blockType: 'contentMedia',
      media: '{{IMAGE-3}}',
      mediaPosition: 'left',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'The Challenge',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'They faced operational inefficiencies resulting in increased costs and reduced productivity.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'Our client, a prominent player in the tech industry, presented us with a formidable challenge. Their need was clear - a customized software solution to streamline operations, foster collaboration, and drive sustainable growth.',
            },
          ],
        },
      ]) as any,
    },
    {
      blockName: 'Solution',
      blockType: 'contentMedia',
      media: '{{IMAGE-4}}',
      mediaPosition: 'right',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'The Solution',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'Spider Software, an innovative platform purpose-built to tackle their specific pain points.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'Our team of seasoned software engineers and designers enthusiastically embarked on crafting a tailor-made solution for the client. Spider Software introduced automated workflows and process optimization, dramatically reducing manual errors and enhancing efficiency.',
            },
          ],
        },
      ]) as any,
    },
    {
      blockName: 'Testimonial',
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Testimonial',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: '"Our expectations were exceeded with Spider Software. The team understood our unique challenges and delivered a solution that has revolutionized our operations. We simply could not be happier with the results." - CEO, Spider Software',
                },
              ],
              type: 'h5',
            },
          ]) as any,
          size: 'full',
        },
      ],
    },
    {
      blockName: 'Outro Image',
      blockType: 'mediaBlock',
      media: '{{IMAGE-2}}',
    },
    {
      blockName: 'Reflection',
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Reflection',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: 'The success story of Spider Software serves as a testament to our unwavering commitment to innovation and client-centric solutions. We are immensely proud of the transformative impact it has had on the client operations and the tech industry as a whole.',
                },
              ],
            },
            {
              children: [
                {
                  text: 'At the forefront of digital innovation, Spider Software demonstrates our ability to create solutions that empower organizations to excel and thrive in the digital age. If you are seeking a partner to drive digital transformation, streamline operations, and elevate your industry standing, reach out to us today. Let us collaborate on your next success story, just like Spider Software.',
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
      'Discover how our latest software release boosted efficiency, reduced road blocks and drove remarkable growth in the tech industry.',
    image: '{{IMAGE-1}}',
    title: 'Reviving efficiency with Spider Software',
  },
  publishedDate: '2023-09-30T23:00:00.000Z',
  relatedProjects: [], // this is populated by the seed script
  slug: 'software',
  title: 'Reviving efficiency with Spider Software',
}
