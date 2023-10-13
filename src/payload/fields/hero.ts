import type { Field } from 'payload/types'

import {
  HeadingFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { LabelFeature } from './lexicalFeatures/label'
import { LargeBodyFeature } from './lexicalFeatures/largeBody'
import linkGroup from './linkGroup'
import richText from './richText'

export const hero: Field = {
  name: 'hero',
  fields: [
    {
      name: 'type',
      defaultValue: 'lowImpact',
      label: 'Type',
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
      required: true,
      type: 'select',
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
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
      type: 'upload',
    },
  ],
  label: false,
  type: 'group',
}
