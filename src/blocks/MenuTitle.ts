import { Block } from 'payload/types';

export const MenuTitle: Block = {
  slug: 'menuTitle',
  labels: {
    singular: 'Menu Title',
    plural: 'Menu Titles',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
  ],
};
