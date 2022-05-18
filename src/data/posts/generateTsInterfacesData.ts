export function generateTsInterfacesData(authorId: string, categoryId: string, imageId: string) {
  return {
    id: '62007c57d0dee299037cda6f',
    title: 'New Feature - Auto-generate TypeScript Interfaces',
    author: authorId,
    publishDate: '2022-02-01T05:00:00.000Z',
    category: [
      categoryId,
      // {
      //   id: categoryId,
      // },
    ],
    _status: 'published',
    layout: [
      {
        columns: [
          {
            width: 'full',
            alignment: 'left',
            richText: [
              {
                type: 'h2',
                children: [
                  {
                    text: "Payload just shipped a ton of new TypeScript features and improvements. Most notably—if you're using Payload with TypeScript, you can now generate types automatically for all of your collections and globals to use within your app's code.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: "We've been working hard at making Payload + TypeScript a match made in heaven, and with its newest version (",
                  },
                  {
                    text: '0.13.6',
                    code: true,
                  },
                  {
                    text: "), building in TypeScript just got a lot better. Most notably, we've shipped a new command that allows you to generate TypeScript types automatically from all your Global and Collection configs: `payload generate:types`.",
                  },
                ],
              },
              {
                children: [
                  {
                    text: 'You can run this command whenever you need to regenerate your types, and then you can use these types in your Payload code directly.',
                  },
                ],
              },
              {
                children: [
                  {
                    text: '',
                  },
                ],
              },
            ],
            links: [
              {
                link: {
                  type: 'custom',
                  label: 'TypeScript Generation Docs',
                  url: 'https://payloadcms.com/docs/typescript/generating-types',
                  newTab: true,
                },
                id: '62007c57738c2e136e916272',
              },
            ],
            id: '62007c57738c2e136e916273',
          },
        ],
        id: '62007bade370656302b0c846',
        blockName: 'Post Content',
        blockType: 'content',
      },
    ],
    meta: {
      title: 'Payload CMS - Feature - Auto-generate TypeScript Interfaces',
      description:
        "You can now generate types automatically for all of your collections and globals to use within your app's code.",
      image: imageId,
    },
    createdAt: '2022-02-07T01:56:39.154Z',
    updatedAt: '2022-02-07T01:56:39.154Z',
  };
}
