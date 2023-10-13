import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const FormBlock: Block = {
  fields: [
    {
      name: 'form',
      relationTo: 'forms',
      required: true,
      type: 'relationship',
    },
    {
      name: 'enableIntro',
      label: 'Enable Intro Content',
      type: 'checkbox',
    },
    richText({
      name: 'introContent',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
      label: 'Intro Content',
    }),
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Form Blocks',
    singular: 'Form Block',
  },
  slug: 'formBlock',
}
