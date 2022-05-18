export function buildWebsiteData(
  authorId: string,
  categoryId: string,
  imageId: string,
) {
  return {
    title:
      'Building a Professionally Designed Website with NextJS & TypeScript - Ep. 1',
    author: authorId,
    publishDate: '2021-03-23T05:00:00.000Z',
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
                    text: 'Have you ever wondered how professional design firms go about building high-end websites? If so, this series is for you.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Hi, my name is James. Outside of co-founding Payload CMS, I also operate a professional design firm called ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://trbl.design/',
                    children: [
                      {
                        text: 'TRBL',
                      },
                    ],
                  },
                  {
                    text: ". There, we specialize in custom UX and full-stack development—usually TypeScript front-to-back. I've been a designer and full-stack developer for around 10 years now and self-employed for six. I absolutely love the work that I do.",
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'I have been working on a new video series that describes, in detail, how professional design firms like TRBL go about building completely custom websites using a headless CMS, React, and TypeScript. This series is going to be a bit different than the typical to-do app style videos and I want it to show a much deeper level of project approach and code mentality—all the way from how to scaffold centralized, reusable TypeScript types to how to build websites with React layout-building components.',
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
              {
                type: 'h3',
                children: [
                  {
                    text: 'Table of Contents',
                  },
                ],
              },
              {
                type: 'ul',
                children: [
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=0s',
                        children: [
                          {
                            text: '0:00',
                          },
                        ],
                      },
                      {
                        text: ' - Intro',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=196s',
                        children: [
                          {
                            text: '3:16',
                          },
                        ],
                      },
                      {
                        text: '​ - Project plan & series overview',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=926s',
                        children: [
                          {
                            text: '15:26​',
                          },
                        ],
                      },
                      {
                        text: ' - Design review',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=1517s',
                        children: [
                          {
                            text: '25:17',
                          },
                        ],
                      },
                      {
                        text: '​ - Payload introduction',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=2005s',
                        children: [
                          {
                            text: '33:25',
                          },
                        ],
                      },
                      {
                        text: '​ - Payload + NextJS boilerplate setup',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=2597s',
                        children: [
                          {
                            text: '43:17​',
                          },
                        ],
                      },
                      {
                        text: ' - CMS scaffolding (form submissions, studies, shared Payload fields, etc.)',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=3608s',
                        children: [
                          {
                            text: '1:00:08',
                          },
                        ],
                      },
                      {
                        text: '​ - The first layout building block - Content',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=4565s',
                        children: [
                          {
                            text: '1:16:05',
                          },
                        ],
                      },
                      {
                        text: '​ - Globals configuration (mega menu, footer, social media)',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=5753s',
                        children: [
                          {
                            text: '1:35:53',
                          },
                        ],
                      },
                      {
                        text: '​ - All layout blocks - fast-forward and review',
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: '',
                      },
                      {
                        type: 'link',
                        newTab: false,
                        url: 'https://www.youtube.com/watch?v=bxWsZTtqs80&t=6409s',
                        children: [
                          {
                            text: '1:46:49​',
                          },
                        ],
                      },
                      {
                        text: ' - Recap',
                      },
                    ],
                  },
                  {
                    type: 'h3',
                    children: [
                      {
                        text: 'Series Goals',
                      },
                    ],
                  },
                  {
                    type: 'p',
                    children: [
                      {
                        text: "One of my goals with this series is to provide a window into how professional design firms go about delivering sites with a lot of value to clients that absolutely need that level of quality, and are willing to pay for it. The site that we'll be building is actual, real-world work, and although it's more of a small-to-medium budget for us, the principles involved can be used to deliver websites where clients will happily seek out talented designers / developers and pay $100K+, because they need it.",
                      },
                    ],
                  },
                  {
                    type: 'p',
                    children: [
                      {
                        text: "Another goal of mine is that I want to challenge our industry to find the clients that value the work that we do, and I want developers to stop selling themselves short. Also, don't worry about the Squarespaces of the world. ",
                      },
                      {
                        text: 'Find the budgets that reward you for your skill.',
                        bold: true,
                      },
                      {
                        text: "There is a segment of the market that still absolutely requires high-end development standards and approaches, and it's alive and well.",
                      },
                    ],
                  },
                  {
                    type: 'h4',
                    children: [
                      {
                        text: 'Feedback is Appreciated',
                      },
                    ],
                  },
                  {
                    type: 'p',
                    children: [
                      {
                        text: "This is episode 1 - and it's my first ever YouTube video. I would greatly appreciate any candid feedback that this community has for me, and if you haven't already, please give Payload a shot. We'd love to hear your thoughts.",
                      },
                    ],
                  },
                  {
                    type: 'p',
                    children: [
                      {
                        text: 'Let us know what you think, and thank you!',
                      },
                    ],
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
        'Payload CMS - Building a Professionally Designed Website with NextJS & TypeScript - Ep. 1',
      description:
        'Have you ever wondered how professional design firms go about building high-end websites? If so, this series is for you.',
      image: imageId,
    },
    createdAt: '2021-03-23T01:56:39.154Z',
    updatedAt: '2021-03-23T01:56:39.154Z',
  };
}
