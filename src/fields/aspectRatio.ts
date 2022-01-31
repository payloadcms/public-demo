import { Field } from 'payload/types';
import deepMerge from '../utilities/deepMerge';

type AspectRatio = (overrides?: Partial<Field>) => Field

const aspectRatio: AspectRatio = (overrides) => deepMerge<Field, Partial<Field>>(
  {
    name: 'aspectRatio',
    type: 'select',
    defaultValue: '56.25',
    options: [
      {
        label: '16:9',
        value: '56.25',
      },
      {
        label: '4:5',
        value: '75',
      },
    ],
  },
  overrides,
);

export default aspectRatio;
