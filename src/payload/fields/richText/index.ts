import type { FeatureProvider } from '@payloadcms/richtext-lexical'
import type { RichTextField } from 'payload/types'

import { ParagraphFeature, UploadFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

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
      editor: lexicalEditor({
        features: () => [
          ...[...defaultPublicDemoFeatures, ...(additions.features || [])],
          UploadFeature({
            collections: {
              media: {
                fields: [
                  {
                    name: 'caption',
                    editor: lexicalEditor({
                      features: () => [ParagraphFeature(), ...defaultPublicDemoFeatures],
                    }),
                    label: 'Caption',
                    type: 'richText',
                  },
                  {
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
                    type: 'radio',
                  },
                  {
                    name: 'enableLink',
                    label: 'Enable Link',
                    type: 'checkbox',
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
      required: true,
      type: 'richText',
    },
    overrides || {},
  )

export default richText
