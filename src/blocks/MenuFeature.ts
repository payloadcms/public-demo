import { Block } from 'payload/types';
import link from '../fields/link';

export const MenuFeature: Block = {
  slug: 'menuFeature',
  labels: {
    singular: 'Menu Feature',
    plural: 'Menu Features',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Maximum upload file size: 2MB. Recommended file size for images is <500KB.',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    link({
      appearances: false,
      disableLabel: true,
    }),
  ],
};
