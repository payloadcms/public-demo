import { Access } from 'payload/config';
import { CollectionConfig } from 'payload/types';

const demoUserAccess: Access = ({ req: { user } }) => {
  if (!user) return false

  return {
    id: {
      not_equals: user.id
    }
  }
};

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    update: demoUserAccess,
    delete: demoUserAccess,
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    }
  ],
};

export default Users;
