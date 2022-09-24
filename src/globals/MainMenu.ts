import { GlobalConfig } from 'payload/types';
import { MenuDescription } from '../blocks/MenuDescription';
import { MenuFeature } from '../blocks/MenuFeature';
import { MenuLink } from '../blocks/MenuLink';
import { MenuTitle } from '../blocks/MenuTitle';
import link from '../fields/link';

const menuColumnBlocks = [
  MenuTitle,
  MenuLink,
  MenuDescription,
  MenuFeature,
];

const MainMenu: GlobalConfig = {
  slug: 'mainMenu',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Admin'
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'type',
          type: 'radio',
          defaultValue: 'link',
          admin: {
            layout: 'horizontal',
          },
          options: [
            {
              label: 'Link',
              value: 'link',
            },
            {
              label: 'Sub-menu',
              value: 'subMenu',
            },
          ],
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'subMenu',
          label: false,
          type: 'group',
          admin: {
            condition: (_, { type } = {}) => type === 'subMenu',
          },
          fields: [
            {
              name: 'blocks',
              label: 'Menu Blocks',
              labels: {
                singular: 'Menu Block',
                plural: 'Menu Blocks',
              },
              type: 'blocks',
              blocks: menuColumnBlocks,
            },
          ],
        },
        link({
          appearances: false,
          disableLabel: true,
          overrides: {
            admin: {
              condition: (_, { type }) => type === 'link',
            },
          },
        }),
      ],
    },
  ],
};

export default MainMenu;
