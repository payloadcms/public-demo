export function homeData(imageId: string, userId: string) {
  return {
    title: 'Home',
    hero: {
      type: 'contentMedia',
      contentMedia: {
        richText: [
          {
            type: 'h1',
            children: [
              {
                text: 'Payload Demo',
              },
            ],
          },
          {
            type: 'large-body',
            children: [
              {
                text: 'This is a snippet of intro copy set in a custom Rich Text element called "large body". ',
              },
            ],
          },
          {
            type: 'p',
            children: [
              {
                text: 'Here is a normal paragraph with a ',
              },
              {
                type: 'link',
                url: 'https://payloadcms.com',
                newTab: false,
                children: [
                  {
                    text: 'link',
                  },
                ],
              },
              {
                text: '.',
              },
            ],
          },
        ],
        links: [],
        media: imageId,
        embeddedVideo: {
          aspectRatio: '56.25',
        },
      },
    },
    layout: [
      {
        columns: [
          {
            width: 'half',
            alignment: 'left',
            richText: [
              {
                type: 'p',
                children: [
                  {
                    text: 'Here is a column of content and it has an embedded Media element within it. This content will be used to generate a Meta Description.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
              {
                type: 'upload',
                value: {
                  id: imageId,
                },
                relationTo: 'media',
                children: [
                  {
                    text: ' ',
                  },
                ],
                fields: {
                  caption: [
                    {
                      type: 'p',
                      children: [
                        {
                          text: 'Here is a caption for this image.',
                        },
                      ],
                    },
                  ],
                  link: {
                    url: 'https://payloadcms.com',
                    type: 'custom',
                  },
                  alignment: 'center',
                  enableLink: true,
                },
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
          {
            width: 'half',
            alignment: 'left',
            richText: [
              {
                type: 'p',
                children: [
                  {
                    text: "Here is a second column of content. It's got a custom Rich Text YouTube embed.",
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
              {
                type: 'video',
                id: 'bxWsZTtqs80',
                source: 'youtube',
                children: [
                  {
                    text: ' ',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
        blockName: 'Two Column Content Intro',
        blockType: 'content',
      },
    ],
    slug: 'home',
    status: 'published',
    author: userId,
    meta: {
      title: 'Payload CMS Demo - Home',
      description:
        'Here is a column of content and it has an embedded Media element within it. This content will be used to generate a Meta Description.',
      image: imageId,
    },
    createdAt: '2022-01-31T20:26:12.877Z',
    updatedAt: '2022-01-31T20:26:52.179Z',
  };
}