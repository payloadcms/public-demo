import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const ContentMedia: Block = {
  slug: 'contentMedia',
  fields: [
    invertBackground,
    {
      name: 'mediaPosition',
      type: 'radio',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    richText(),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
