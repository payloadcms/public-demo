import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  slug: 'categories',
}

export default Categories
