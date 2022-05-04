import { CollectionConfig } from 'payload/types';
import Content from '../blocks/Content';
import { Media } from '../blocks/Media';
import MediaContent from '../blocks/MediaContent';
import MediaSlider from '../blocks/MediaSlider';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
	versions: {
		drafts: true,
	},
  fields: [
    {
      name: 'title',
      type: 'text',
			localized: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
			hasMany: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        Content,
        Media,
        MediaContent,
        MediaSlider,
      ],
    },

  ],
}

export default Posts;
