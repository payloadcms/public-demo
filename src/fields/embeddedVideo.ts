import { Field } from 'payload/types';
import aspectRatio from './aspectRatio';

const embeddedVideo: Field = {
  name: 'embeddedVideo',
  label: 'Embedded Video',
  type: 'group',
	admin: {
		hideGutter: true,
	},
  fields: [
    {
      name: 'embed',
      type: 'checkbox',
      admin: {
        description: 'Embeds a Vimeo or YouTube iframe.',
      },
    },
    {
      name: 'poster',
      label: 'Poster Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (data, { embed }) => Boolean(embed),
        description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
      },
    },
    {
      name: 'platform',
      type: 'select',
      options: [
        {
          label: 'YouTube',
          value: 'youtube',
        },
        {
          label: 'Vimeo',
          value: 'vimeo',
        },
      ],
      admin: {
        condition: (data, { embed }) => Boolean(embed),
      },
    },
    {
      name: 'videoID',
      label: 'Video ID',
      type: 'text',
      required: true,
      admin: {
        condition: (data, { embed }) => Boolean(embed),
      },
    },
    aspectRatio({
      admin: {
        condition: (data, { embed }) => Boolean(embed),
      },
    }),
  ],
};

export default embeddedVideo;
