import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { checkRole } from './checkRole'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'
import { loginAfterCreate } from './hooks/loginAfterCreate'

const Users: CollectionConfig = {
  access: {
    admin: ({ req: { user } }) => checkRole(['admin'], user),
    create: () => false,
    delete: () => false,
    update: () => false,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      access: {
        create: admins,
        read: admins,
        update: admins,
      },
      defaultValue: ['user'],
      hasMany: true,
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'user',
          value: 'user',
        },
      ],
      type: 'select',
    },
  ],
  hooks: {
    afterChange: [loginAfterCreate],
  },
  slug: 'users',
  timestamps: true,
}

export default Users
