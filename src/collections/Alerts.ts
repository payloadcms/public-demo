import { CollectionConfig } from 'payload/types';
import linkGroup from '../fields/linkGroup';

export const Alerts: CollectionConfig = {
  slug: 'alerts',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'placement',
      'subsites',
      'backgroundColor',
    ],
    enableRichTextRelationship: false,
    group: 'Admin'
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
    },
    {
      name: 'placement',
      type: 'radio',
      defaultValue: 'global',
      required: true,
      options: [
        {
          label: 'Global',
          value: 'global',
        },
        {
          label: 'Individual pages or posts',
          value: 'documents',
        },
      ],
      admin: {
        description: 'Choose to display this alert banner globally or only for individual pages or posts.',
      },
    },
    {
      name: 'documents',
      type: 'relationship',
      relationTo: [
        'pages',
      ],
      required: true,
      hasMany: true,
      admin: {
        condition: ({ placement }) => placement === 'documents',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'matchTheme',
      admin: {
        position: 'sidebar',
      },
      options: [
        {
          label: 'Match Theme',
          value: 'matchTheme',
        },
        {
          label: 'Green',
          value: 'green',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Purple',
          value: 'purple',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      localized: true,
      admin: {
        elements: [
          'link',
        ],
        // leaves manage the toolbar options on the richText editor in the admin UI
        leaves: [
          'bold',
          'italic',
          'underline',
        ],
      },
    },
    linkGroup(),
  ],
};
