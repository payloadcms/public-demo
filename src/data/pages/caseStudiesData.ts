import { Page } from "payload/generated-types";

export const getCaseStudiesData = (imageId: string, authorId: string, parentId: string): Partial<Page> => {
  return {
    title: 'Case Studies',
    slug: 'case-studies',
    _status: 'published',
    parent: parentId,
    author: authorId,
    meta: {
      title: 'Payload CMS Demo - Case Studies',
      description: 'Case Study 1',
      image: imageId,
    },
    hero: {
      type: 'basic',
      basic: {
        richText: [
          {
            type: 'h1',
            children: [
              {
                text: 'Case Studies',
              },
            ],
          },
        ],
        links: [],
      },
      content: {
        links: [],
      },
      contentMedia: {
        // @ts-expect-error
        embeddedVideo: {
          aspectRatio: '56.25',
        },
      },
    },
    layout: [
      {
        introContent: [
          {
            type: 'h2',
            children: [
              {
                text: 'Case Study 1',
              },
            ],
          },
        ],
        slides: [
          {
            media: imageId,
            id: '61f9d62849d83a1191f22743',
          },
          {
            media: imageId,
            id: '61f9d62849d83a1191f22744',
          },
          {
            media: imageId,
            id: '61f9d62849d83a1191f22745',
          },
        ],
        blockName: 'Case Study 1',
        blockType: 'mediaSlider',
      },
      {
        introContent: [
          {
            type: 'h2',
            children: [
              {
                text: 'Case Study 2',
              },
            ],
          },
        ],
        slides: [
          {
            media: imageId,
          },
          {
            media: imageId,
          },
          {
            media: imageId,
          },
        ],
        blockName: 'Case Study 2',
        blockType: 'mediaSlider',
      },
    ],
  };
}
