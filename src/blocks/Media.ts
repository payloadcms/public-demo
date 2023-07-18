import { Block } from 'payload/types';
import aspectRatio from '../fields/aspectRatio';

export const Media: Block = {
  slug: 'media',
  graphQL: {
    singularName: 'MediaBlock',
  },
  labels: {
    singular: 'Media Block',
    plural: 'Media Blocks',
  },
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },
    {
      name: 'useVimeo',
      type: 'checkbox',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'vimeoID',
          label: 'Vimeo ID',
          type: 'text',
          required: true,
          admin: {
            condition: (data, { useVimeo }) => Boolean(useVimeo),
            description: 'Embeds a Vimeo iframe, using the media field as its poster image.',
            width: '50%',
          },
        },
        aspectRatio({
          admin: {
            condition: (data, { useVimeo }) => Boolean(useVimeo),
            description: 'If you need to specify a different aspect ratio than 16:9, set it here.',
            width: '50%',
          },
        }),
      ],
    },
    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      defaultValue: 'normal',
      options: [
        {
          label: 'Normal',
          value: 'normal',
        },
        {
          label: 'Wide',
          value: 'wide',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'richText',
      admin: {
        elements: [
          'link',
        ],
      },
    },
  ],
};
