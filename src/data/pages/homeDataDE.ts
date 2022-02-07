export function homeDataDE(imageId: string, userId: string) {
  return {
    title: 'Heimat',
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
                text: 'Dies ist ein Ausschnitt einer Intro-Kopie, die in einem benutzerdefinierten Rich-Text-Element namens "large body". ',
              },
            ],
          },
          {
            type: 'p',
            children: [
              {
                text: 'Hier ist ein normaler Absatz mit a ',
              },
              {
                type: 'link',
                url: 'https://payloadcms.com',
                newTab: false,
                children: [
                  {
                    text: 'verknüpfung',
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
                    text: 'Hier ist eine Inhaltsspalte mit einem eingebetteten Medienelement. Dieser Inhalt wird verwendet, um eine Meta-Beschreibung zu generieren.',
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
                          text: 'Hier ist eine Bildunterschrift für dieses Bild.',
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
                    text: 'Hier ist eine zweite Inhaltsspalte. Es hat eine benutzerdefinierte Rich-Text-YouTube-Einbettung.',
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
        blockName: 'Inhaltliche Einführung in zwei Spalten',
        blockType: 'content',
      },
    ],
    slug: 'heimat',
    status: 'published',
    author: userId,
    meta: {
      title: 'Payload CMS Demo - Heimat',
      description:
        'Hier ist eine Inhaltsspalte mit einem eingebetteten Medienelement. Dieser Inhalt wird verwendet, um eine Meta-Beschreibung zu generieren.',
      image: imageId,
    },
    createdAt: '2022-01-31T20:26:12.877Z',
    updatedAt: '2022-01-31T20:26:52.179Z',
  };
}
