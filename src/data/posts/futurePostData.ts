export function futurePostData(authorId: string, categoryId: string, imageId: string) {
  const now = new Date();
  const publishDate = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 9);
  return {
    title:
      'A Post set to Publish at a Future Date',
    author: authorId,
    publishDate,
    category: [categoryId],
    _status: 'published',
    layout: [
      {
        columns: [
          {
            width: 'full',
            alignment: 'left',
            richText: [
              {
                type: 'h3',
                children: [
                  {
                    text: 'This post will be public in the future but for now is only visible to authenticated users thanks to access control!',
                  },
                ],
              },
            ],
            links: [],
            id: '62007c57738c2e136e916273',
          },
        ],
        id: '62007bade370656302b0c846',
        blockName: 'Post Content',
        blockType: 'content',
      },
    ],
    meta: {
      title:
        'A Post set to Publish in the Future',
      description:
        'This post will be public in the future but for now is only visible to authenticated users thanks to access control',
      image: imageId,
    },
    createdAt: '2021-03-23T01:56:39.154Z',
    updatedAt: '2021-03-23T01:56:39.154Z',
  };
}
