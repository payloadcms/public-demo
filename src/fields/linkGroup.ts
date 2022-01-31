import { Field } from 'payload/types';
import { ArrayField } from 'payload/dist/fields/config/types';
import deepMerge from '../utilities/deepMerge';
import link from './link';

type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>
  appearances?: string[] | false
}) => Field;

const linkGroup: LinkGroupType = ({
  overrides = {},
  appearances,
} = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    maxRows: 2,
    fields: [
      link({
        appearances,
        overrides: {
          label: false,
        },
      }),
    ],
  };

  return deepMerge(generatedLinkGroup, overrides);
};

export default linkGroup;
