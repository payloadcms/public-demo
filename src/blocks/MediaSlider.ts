import { Block } from 'payload/types';
import richText from '../fields/richText';

export const MediaSlider: Block = {
  slug: 'mediaSlider',
  labels: {
    singular: 'Media Slider',
    plural: 'Media Sliders',
  },
  fields: [
    richText({
      name: 'introContent',
      label: 'Introductory Content',
    }),
    {
      name: 'slides',
      type: 'array',
      minRows: 3,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
      ],
    },
  ],
};

export default MediaSlider;
