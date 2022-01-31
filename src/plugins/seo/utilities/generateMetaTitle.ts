import { Fields } from 'payload/dist/admin/components/forms/Form/types';

const base = 'Payload CMS Demo';

export const generateMetaTitle = async (fields: Fields): Promise<string> => {
  const {
    title: {
      value: docTitle,
    },
    subsite,
  } = fields;

  return `${base} - ${docTitle}`
};
