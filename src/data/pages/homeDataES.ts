export function homeDataES(imageId: string, userId: string) {
  return {
    title: 'Página de Inicio',
    hero: {
      type: 'contentMedia',
      contentMedia: {
        richText: [
          {
            type: 'h1',
            children: [
              {
                text: 'Payload Manifestación',
              },
            ],
          },
          {
            type: 'large-body',
            children: [
              {
                text: 'Este es un fragmento de texto de introducción establecido en un elemento de texto enriquecido personalizado llamado "large body". ',
              },
            ],
          },
          {
            type: 'p',
            children: [
              {
                text: 'Aquí hay un párrafo normal con un ',
              },
              {
                type: 'link',
                url: 'https://payloadcms.com',
                newTab: false,
                children: [
                  {
                    text: 'enlace',
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
                    text: 'Aquí hay una columna de contenido y tiene un elemento multimedia incrustado dentro. Este contenido se utilizará para generar una meta descripción.',
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
                          text: 'Aquí hay un título para esta imagen.',
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
                    text: 'Aquí hay una segunda columna de contenido. Tiene una inserción de YouTube de texto enriquecido personalizada.',
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
        blockName: 'Introducción de contenido de dos columnas',
        blockType: 'content',
      },
    ],
    slug: 'home',
    status: 'published',
    author: userId,
    meta: {
      title: 'Payload CMS Demo - Página de Inicio',
      description:
        'Aquí hay una columna de contenido y tiene un elemento multimedia incrustado dentro. Este contenido se utilizará para generar una meta descripción.',
      image: imageId,
    },
    createdAt: '2022-01-31T20:26:12.877Z',
    updatedAt: '2022-01-31T20:26:52.179Z',
  };
}
