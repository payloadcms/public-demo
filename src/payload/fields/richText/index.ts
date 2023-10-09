import type { FeatureProvider } from '@payloadcms/richtext-lexical'
import { lexicalEditor, ParagraphFeature, UploadFeature } from '@payloadcms/richtext-lexical'
import type { RichTextField } from 'payload/types'

import deepMerge from '../../utilities/deepMerge'
import link from '../link'
import { defaultPublicDemoFeatures } from './defaultFeatures'

type RichText = (
  overrides?: Partial<RichTextField>,
  additions?: {
    features?: FeatureProvider[]
  },
) => RichTextField

const richText: RichText = (
  overrides,
  additions = {
    features: [],
  },
) =>
  deepMerge<RichTextField, Partial<RichTextField>>(
    {
      name: 'richText',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...[...defaultPublicDemoFeatures, ...(additions.features || [])],
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    type: 'richText',
                    name: 'caption',
                    label: 'Caption',
                    editor: lexicalEditor({
                      features: ({ defaultFeatures }) => [
                        ParagraphFeature(),
                        ...defaultPublicDemoFeatures,
                      ],
                    }),
                  },
                  {
                    type: 'radio',
                    name: 'alignment',
                    label: 'Alignment',
                    options: [
                      {
                        label: 'Left',
                        value: 'left',
                      },
                      {
                        label: 'Center',
                        value: 'center',
                      },
                      {
                        label: 'Right',
                        value: 'right',
                      },
                    ],
                  },
                  {
                    name: 'enableLink',
                    type: 'checkbox',
                    label: 'Enable Link',
                  },
                  link({
                    appearances: false,
                    disableLabel: true,
                    overrides: {
                      admin: {
                        condition: (_, data) => Boolean(data?.enableLink),
                      },
                    },
                  }),
                ],
              },
            },
          }),
        ],
      }),
    },
    overrides || {},
  )

export default richText
