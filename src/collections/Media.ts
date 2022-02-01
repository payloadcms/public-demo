import { CollectionConfig } from 'payload/types';
import path from 'path';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  admin: {
    useAsTitle: 'filename',
    description: 'Uploads are set to read-only for this demo.',
  },
  upload: {
    adminThumbnail: 'thumbnail',
    staticDir: path.resolve(__dirname, '../../media'),
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
			localized: true,
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};

export default Media;
