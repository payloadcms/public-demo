import { FieldHook } from 'payload/types';

export const populateAuthor: FieldHook = async ({ req: { user }, value }) => {
  if (!value && user) {
    return user.id;
  }

  return value;
};
