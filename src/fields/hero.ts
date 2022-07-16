import { RichTextField } from 'payload/dist/fields/config/types';
import { Field } from 'payload/types';
import link from './link';
import linkGroup from './linkGroup';
import richText from './richText';
import largeBody from './richText/largeBody';
import embeddedVideo from './embeddedVideo';

type Args = {
  name?: string,
  condition?: (data: any, sibling: any) => boolean,
}

const richTextHeroField = (args?: Args): RichTextField => {
  const {
    name,
    condition,
  } = args || {};

  return ({
    type: 'richText',
    name: name || 'richText',
		localized: true,
    admin: {
      elements: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        largeBody,
        'link',
				'upload',
      ],
      leaves: [
        'underline',
      ],
      condition,
    },
  });
};

export const hero: Field = {
  name: 'hero',
	label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'basic',
      options: [
        {
          label: 'Basic',
          value: 'basic',
        },
        {
          label: 'Content',
          value: 'content',
        },
        {
          label: 'Content and Media',
          value: 'contentMedia',
        },
        {
          label: 'Content Sidebar',
          value: 'contentSidebar',
        },
        {
          label: 'Quick Nav',
          value: 'quickNav',
        },
        {
          label: 'Fullscreen Background',
          value: 'fullscreenBackground',
        },
        {
          label: 'Fullscreen Slider',
          value: 'fullscreenSlider',
        },
      ],
    },
    {
      name: 'basic',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'basic',
      },
      fields: [
        richTextHeroField(),
        linkGroup(),
      ],
    },
    {
      name: 'content',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'content',
      },
      fields: [
        richTextHeroField(),
        linkGroup(),
      ],
    },
    {
      name: 'contentMedia',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'contentMedia',
      },
      fields: [
        richTextHeroField(),
        linkGroup(),
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          admin: {
            // @ts-ignore
            condition: (data, { embeddedVideo }) => Boolean(!embeddedVideo?.embed),
            description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
        embeddedVideo,
      ],
    },
    {
      name: 'contentSidebar',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'contentSidebar',
      },
      fields: [
        richTextHeroField({
          name: 'mainContent',
        }),
        linkGroup(),
        richText({ name: 'sidebarContent' }),
      ],
    },
    {
      name: 'fullscreenBackground',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'fullscreenBackground',
      },
      fields: [
        {
          name: 'backgroundMedia',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
        richTextHeroField(),
        linkGroup(),
      ],
    },
    {
      name: 'quickNav',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'quickNav',
      },
      fields: [
        {
          name: 'backgroundMedia',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
        richTextHeroField(),
        linkGroup(),
        {
          name: 'columns',
          label: 'Columns',
          type: 'array',
          minRows: 2,
          maxRows: 3,
          labels: {
            singular: 'Column',
            plural: 'Columns',
          },
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              required: true,
              maxLength: 220,
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
      ],
    },
    {
      name: 'fullscreenSlider',
      label: false,
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'fullscreenSlider',
      },
      fields: [
        {
          name: 'useStaticContent',
          label: 'Use Static Content',
          type: 'checkbox',
          admin: {
            description: 'Removes individual slide content and enables global content that does not rotate',
          },
        },
        richTextHeroField({
          condition: (_, { useStaticContent }) => Boolean(useStaticContent),
        }),
        linkGroup({
          overrides: {
            admin: {
              condition: (data, { useStaticContent }) => Boolean(useStaticContent),
            },
          },
        }),
        {
          name: 'slides',
          type: 'array',
          minRows: 2,
          labels: {
            singular: 'Slide',
            plural: 'Slides',
          },
          fields: [
            {
              name: 'backgroundMedia',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
              },
            },
            richTextHeroField({
              condition: (data) => {
                const dataRef = data as any;
                const useStaticContent = dataRef?.hero?.fullscreenSlider?.useStaticContent;
                return Boolean(!useStaticContent);
              },
            }),
            linkGroup({
              overrides: {
                admin: {
                  condition: (data) => {
                    const dataRef = data as any;
                    const useStaticContent = dataRef?.hero?.fullscreenSlider?.useStaticContent;
                    return Boolean(!useStaticContent);
                  },
                },
              },
            }),
          ],
        },
      ],
    },
  ],
};
