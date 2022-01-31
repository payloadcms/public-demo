import { CollectionConfig } from 'payload/types';
import path from 'path';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  admin: {
    useAsTitle: 'filename',
    description: 'Maximum upload file size: 2MB. Recommended file size for images is <500KB.',
  },
  upload: {
    adminThumbnail: 'thumbnail',
    staticDir: path.resolve(__dirname, '../../../media'),
    imageSizes: [		
			{
				name: 'thumbnail',
				width: 480,
				height: 320,
			},
			{
				name: 'portrait',
				width: 768,
				height: 1024,
			},
			{
				name: 'hero',
				width: 1920,
				height: 1080,
			}
		],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default Media;
