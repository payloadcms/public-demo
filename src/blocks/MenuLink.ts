import { Block } from 'payload/types';
import link from '../fields/link';

export const MenuLink: Block = {
  slug: 'menuLink',
  labels: {
    singular: 'Menu Link',
    plural: 'Menu Links',
  },
  fields: [
    {
      name: 'appearance',
      type: 'radio',
      defaultValue: 'secondary',
      options: [
        {
          label: 'Primary',
          value: 'primary',
        },
        {
          label: 'Secondary',
          value: 'secondary',
        },
        {
          label: 'Text with Arrow',
          value: 'arrow',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    link({
      appearances: false,
      overrides: {
        label: false,
      },
    }),
  ],
};
