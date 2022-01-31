import { Block } from 'payload/types';
import richText from '../fields/richText';

export const Form: Block = {
  slug: 'embeddedForm',
  fields: [
    richText({
      admin: {
        hideGutter: true,
      },
    }),
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
};
