import { Block } from 'payload/types';
import richText from '../fields/richText';

export const Form: Block = {
  slug: 'embeddedForm',
  fields: [
    richText({}),
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
  ],
};
