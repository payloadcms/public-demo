import type { Project } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'

export const project3: Partial<Project> = {
  title: 'Project 3',
  slug: 'project-3',
  _status: 'published',
  meta: {
    title: 'Project 1',
    description: 'This is the third project.',
    image: '{{IMAGE}}',
  },
  hero: {
    type: 'lowImpact',
    links: null,
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'Project 3',
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
  relatedProjects: [], // this is populated by the seed script
}
