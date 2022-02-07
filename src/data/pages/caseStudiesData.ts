export function caseStudiesData(imageId: string, authorId: string, parentId: string) {
  return {
    title: 'Case Studies',
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
        embeddedVideo: {
          aspectRatio: '56.25',
        },
      },
      contentSidebar: {},
      fullscreenBackground: {},
      quickNav: {},
      fullscreenSlider: {},
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
        id: '61f9d56b02b305e3c9e0b9d4',
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
            id: '61f9d62849d83a1191f22746',
          },
          {
            media: imageId,
            id: '61f9d62849d83a1191f22747',
          },
          {
            media: imageId,
            id: '61f9d62849d83a1191f22748',
          },
        ],
        id: '61f9d5ca02b305e3c9e0b9d8',
        blockName: 'Case Study 2',
        blockType: 'mediaSlider',
      },
    ],
    fullTitle: 'Home > Case Studies',
    breadcrumbs: [
      {
        doc: parentId,
        url: '/home',
        label: 'Home',
        id: '61f9d62849d83a1191f2274b',
      },
      {
        doc: '61f9d628cf5600ada745e55a',
        url: '/home/case-studies',
        label: 'Case Studies',
        id: '61f9d62849d83a1191f2274c',
      },
    ],
    slug: 'case-studies',
    status: 'published',
    parent: parentId,
    author: authorId,
    meta: {
      title: 'Payload CMS Demo - Case Studies',
      description: 'Case Study 1',
      image: imageId,
    },
    createdAt: '2022-02-02T00:54:00.461Z',
    updatedAt: '2022-02-02T00:54:00.511Z',
  };
}
