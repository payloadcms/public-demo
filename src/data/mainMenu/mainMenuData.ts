export function mainMenuData(homeDocId: string, caseStudiesDocId: string) {
  return {
    items: [
      {
        type: 'link',
        label: 'Home',
        subMenu: {
          blocks: [],
        },
        link: {
          type: 'reference',
          reference: {
            value: homeDocId,
            relationTo: 'pages',
          },
        },
        id: '62883ff8853fc735c3d934a0',
      },
      {
        type: 'link',
        label: 'Case Studies',
        subMenu: {
          blocks: [],
        },
        link: {
          type: 'reference',
          reference: {
            value: caseStudiesDocId,
            relationTo: 'pages',
          },
        },
        id: '62883ff8853fc735c3d934a1',
      },
      {
        type: 'subMenu',
        label: 'About Us',
        subMenu: {
          blocks: [
            {
              content: 'This is some detail about the team',
              id: '62883fe37de9fa208c22c15b',
              blockType: 'menuDescription',
            },
          ],
        },
        link: {
          type: 'reference',
        },
        id: '62883ff8853fc735c3d934a2',
      },
      {
        type: 'link',
        label: 'External Link',
        subMenu: {
          blocks: [],
        },
        link: {
          type: 'custom',
          url: 'https://github.com',
        },
        id: '62883ff8853fc735c3d934a3',
      },
    ],
    globalType: 'mainMenu',
    createdAt: '2022-05-21T01:27:20.267Z',
    updatedAt: '2022-05-21T01:27:20.267Z',
    id: '62883ff825469d99746b52ed',
  };
}
