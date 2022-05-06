import { Access } from 'payload/config';
import { CollectionConfig } from 'payload/types';

const demoUserAccess: Access = ({ req: { user } }) => {
  // return false to deny a user
  if (!user) return false
  // return true // to permit access


  // return a query to call on the collection for dynamic control
  return {
    id: {
      not_equals: user.id
    }
  }
};

const Users: CollectionConfig = {

  slug: 'users',

  // any collection can have auth enabled, and may have more than one
  // by enabling auth, the API adds more routes for api/users like /login, /forgot-password, and more
  // here we configure auth settings in an object, instead use "auth: true" to accept all defaults
  auth: {

    // useAPIKey will add a generated token visible to the user in the admin UI that can then be used to make API requests
    useAPIKey: true,

  },
  admin: {
    useAsTitle: 'email',
  },
  access: {

    // allow all get requests to /api/users or the equivalent graphQL query
    read: () => true,
    // create is allowed by default for authenticated users
    // update and delete access is restricted for demo
    update: demoUserAccess,
    delete: demoUserAccess,

  },
  // auth enabled collections get email and other fields for secure authentication in addition to the fields you add
  fields: [
    {
      name: 'name',
      type: 'text',
      // saveToJWT tells Payload to include the field data to the JSON web token used to authenticate users
      saveToJWT: true,
    }
  ],
};

export default Users;
