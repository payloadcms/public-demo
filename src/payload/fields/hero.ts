import {
  HeadingFeature,
  lexicalEditor,
  LinkFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'
import type { Field } from 'payload/types'

import { LabelFeature } from './lexicalFeatures/label'
import { LargeBodyFeature } from './lexicalFeatures/largeBody'
import linkGroup from './linkGroup'
import richText from './richText'

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
    },
    richText({
      editor: lexicalEditor({
        features: [
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h1'] }),
          LinkFeature({}),
          LabelFeature(),
          LargeBodyFeature(),
        ],
      }),
    }),

    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
  ],
}
