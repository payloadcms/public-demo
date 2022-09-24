import { CollectionConfig } from 'payload/types';
import CategorySummary from '../components/CategorySummary'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'id', 'archived'],
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
    {
      name: 'archived',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Archiving filters it from being an option in the posts collection',
      },
    },
    {
      name: 'summary',
      // ui fields do not impact the database or api, and serve as placeholders for custom components in the admin panel
      type: 'ui',
      admin: {
        position: 'sidebar',
        components: {
          // this custom component will fetch the posts count for how many posts have this category
          Field: CategorySummary,
        }
      }
    }
  ],
}

export default Categories;
