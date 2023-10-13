import type { Project } from '../payload-types'

import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'
export const project3: Partial<Project> = {
  _status: 'published',
  hero: {
    media: '{{IMAGE-1}}',
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'Explore the collaborative engineering transformation of the Riverfront Bridge, where safety, aesthetics, and economic vitality converged in our journey of excellence.',
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
                  text: 'Engineering Collaboration',
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
                  text: 'Welcome to a showcase of our latest engineering collaboration: The Riverfront Bridge Revival project. This undertaking is a demanded unwavering commitment and precision to allow the revitalization of critical urban infrastructure.',
                },
              ],
              type: 'h3',
            },
          ]) as any,
          size: 'twoThirds',
        },
        {
          enableLink: false,
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Community Impact Award `22',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Architectural Brilliance Achievement `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Infrastructure Excellence Award `22',
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
              text: 'The Vision',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'Our city faced a pressing issue: an aging and structurally compromised Riverfront Bridge.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'It posed a significant safety risk to the community, demanding immediate attention. The challenge was clear - design and construct a modern, resilient bridge while minimizing disruption to daily life.',
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
              text: 'The Combined Solution',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'We embarked on a mission to create a solution that transcended expectations.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'We carefully selected advanced materials renowned for their durability and longevity, ensuring the new bridge would stand the test of time. Our design not only adhered to rigorous safety standards but also introduced a touch of architectural brilliance, enhancing the city skyline. Minimizing community inconvenience, our construction phase was executed with precision, completing the project ahead of schedule.',
            },
          ],
        },
      ]) as any,
    },
    {
      blockName: 'Feedback',
      blockType: 'content',
      columns: [
        {
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Community Feedback',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: '"The Riverfront Bridge is not just a means of crossing; it is a masterpiece. It is a testament to what engineering can achieve when combined with vision and expertise." - Mayor',
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
                  text: 'The Riverfront Bridge Revival has redefined our cityscape in profound ways. The new bridge ensures the safety of commuters and pedestrians, eradicating the risks posed by the old structure. Its striking design has become an iconic symbol of our city progress, drawing visitors and residents alike. Moreover, the improved infrastructure has catalyzed economic development, attracting businesses and investment to the area.',
                },
              ],
            },
            {
              children: [
                {
                  text: 'We take immense pride in the transformation it has brought to our city, blending safety, aesthetics, and economic vitality seamlessly. If you have an engineering challenge that demands innovation, precision, and the creation of lasting urban landmarks, consider us your trusted partner. ',
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
      'Explore the collaborative engineering transformation of the Riverfront Bridge, where safety, aesthetics, and economic vitality converged in our journey of excellence.',
    image: '{{IMAGE-1}}',
    title: 'Reviving efficiency with Spider Software',
  },
  publishedDate: '2023-09-30T23:00:00.000Z',
  relatedProjects: [], // this is populated by the seed script
  slug: 'engineering',
  title: 'The Riverfront Bridge Collaboration',
}
