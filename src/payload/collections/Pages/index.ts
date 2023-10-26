import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrPublished } from '../../access/adminsOrPublished'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { ContentMedia } from '../../blocks/ContentMedia'
import { MediaBlock } from '../../blocks/MediaBlock'
import { hero } from '../../fields/hero'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { populatePublishedDate } from '../../hooks/populatePublishedDate'
import { revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  access: {
    create: admins,
    delete: () => false,
    read: adminsOrPublished,
    update: admins,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    // livePreview: {
    //   url: ({ data }) =>
    //     `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${data.slug !== 'home' ? data.slug : ''}`,
    // },
    preview: (doc) => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${
          doc.slug !== 'home' ? (doc.slug as string) : ''
        }`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'publishedDate',
      admin: {
        position: 'sidebar',
      },
      type: 'date',
    },
    {
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              blocks: [CallToAction, Content, ContentMedia, MediaBlock, Archive],
              required: true,
              type: 'blocks',
            },
          ],
          label: 'Content',
        },
      ],
      type: 'tabs',
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    afterRead: [populateArchiveBlock],
    beforeChange: [populatePublishedDate],
  },
  slug: 'pages',
  versions: {
    drafts: true,
  },
}
