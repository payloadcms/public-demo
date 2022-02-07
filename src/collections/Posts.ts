import { CollectionConfig } from 'payload/types';
import { Accordion } from '../blocks/Accordion';
import Content from '../blocks/Content';
import { Form } from '../blocks/Form';
import { Media } from '../blocks/Media';
import MediaContent from '../blocks/MediaContent';
import MediaSlider from '../blocks/MediaSlider';
import embeddedVideo from '../fields/embeddedVideo';
import { hero } from '../fields/hero';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
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
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
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
