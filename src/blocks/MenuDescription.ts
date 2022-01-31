import { Block } from 'payload/types';

export const MenuDescription: Block = {
  slug: 'menuDescription',
  labels: {
    singular: 'Menu Description',
    plural: 'Menu Descriptions',
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
    },
  ],
};
