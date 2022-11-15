import { CollectionConfig } from 'payload/types';
import Content from '../blocks/Content';
import { Media } from '../blocks/Media';
import MediaContent from '../blocks/MediaContent';
import MediaSlider from '../blocks/MediaSlider';

const Posts: CollectionConfig = {
  // the slug is used for naming the collection in the database and the APIs that are open. For example: api/posts/${id}
  slug: 'posts',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'title',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: [
      'title',
      'category',
      'publishDate',
      'tags',
      'status'
    ],
    group: 'Content'
  },
  access: {
    read: ({ req: { user } }) => {

      // users who are authenticated will see all posts
      if (user) {
        return true;
      }

      // query publishDate to control when posts are visible to guests
      return {
        and: [
          {
            publishDate: {
              less_than: new Date().toJSON(),
            },
            _status: {
              equals: 'published',
            },
          },
        ],
      };
    },
  },
  // versioning with drafts enabled tells Payload to save documents to a separate collection in the database and allow publishing
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      // localized fields are stored as keyed objects to represent each locale listed in the payload.config.ts. For example: { en: 'English', es: 'Espanol', ...etc }
      localized: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      // the blocks are reusable objects that will be added in array to the document, these are especially useful for structuring content purpose built for frontend componentry
      blocks: [
        Content,
        Media,
        MediaContent,
        MediaSlider,
      ],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      // defaultValues can use functions to return data to populate the create form and also when making POST requests the server will use the value or function to fill in any undefined fields before validation occurs
      defaultValue: ({ user }) => (user.id),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Posts will not be public until this date',
      },
      defaultValue: () => (new Date()),
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      // limit the options using the below query which uses the "archive" field set in the categories collection
      filterOptions: {
        archived: { equals: false },
      },
      // allow selection of one or more categories
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}

export default Posts;
