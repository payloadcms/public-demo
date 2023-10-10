import type { Project } from '../payload-types'
import { convertSlateToLexical } from '../utilities/lexical/slateToLexical'
export const project1: Partial<Project> = {
  title: 'Elevating the Digital Presence of a Global Brand',
  slug: 'elevated-design',
  _status: 'published',
  publishedDate: '2023-09-30T23:00:00.000Z',
  meta: {
    title: 'Elevating the Digital Presence of a Global Brand',
    description:
      'This project showcases our design expertise and commitment to helping our clients thrive in the digital realm.',
    image: '{{IMAGE-SPHERE}}',
  },
  hero: {
    richText: convertSlateToLexical([
      {
        children: [
          {
            text: 'Our team of seasoned designers and developers worked hand in hand with the clients creative team to ensure that every aspect of the website redesign accurately reflected their core values and objectives.',
          },
        ],
        type: 'p',
      },
    ]) as any,
    media: '{{IMAGE-SPHERE}}',
  },
  layout: [
    {
      blockType: 'content',
      blockName: 'Overview',
      columns: [
        {
          size: 'full',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'UX/UI Design',
                },
              ],
              type: 'h6',
            },
          ]) as any,
        },
        {
          size: 'twoThirds',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Get ready to dive into our website renovation journey. We will take you through our design and the awesome results we achieved. This story highlights our commitment to top-notch web design and our knack for making digital magic happen for our clients.',
                },
              ],
              type: 'h3',
            },
          ]) as any,
          link: {
            reference: {
              relationTo: 'pages',
              value: '',
            },
            url: '',
            label: '',
          },
        },
        {
          size: 'oneThird',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Design Excellence Award `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Digital Innovators Nominee `23',
                },
              ],
              type: 'h6',
            },
            {
              children: [
                {
                  text: 'Friendly Web Winner `23',
                },
              ],
              type: 'h6',
            },
          ]) as any,
          enableLink: true,
          link: {
            reference: {
              relationTo: 'pages',
              value: '',
            },
            type: 'custom',
            appearance: 'primary',
            url: 'payloadcms.com',
            label: 'Visit Site',
          },
        },
      ],
    },
    {
      blockType: 'contentMedia',
      blockName: 'User Experience',
      mediaPosition: 'left',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'USER EXPERIENCE',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'Improving overall user experience was at the forefront of our redesign strategy. ',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'We implemented intuitive navigation, responsive design, and optimized load times to ensure a seamless and engaging experience for visitors. Our goal was to captivate and retain their audience, and we achieved this through striking visuals, interactive features, and a streamlined user journey. The websites aesthetics and functionality now work in perfect harmony, drawing users deeper into the client experience.',
            },
          ],
        },
      ]) as any,
      media: '{{IMAGE-2}}',
    },
    {
      blockType: 'contentMedia',
      blockName: 'SEO',
      mediaPosition: 'right',
      richText: convertSlateToLexical([
        {
          children: [
            {
              text: 'SEO',
            },
          ],
          type: 'h6',
        },
        {
          children: [
            {
              text: 'We understand the importance of SEO and mobile responsiveness.',
            },
          ],
          type: 'h3',
        },
        {
          children: [
            {
              text: 'Our comprehensive approach involved optimizing the website content and structure to improve search engine rankings. Furthermore, we ensured that the website performed flawlessly on all devices, catering to the growing mobile audience. This dual focus on SEO and mobile responsiveness resulted in increased organic traffic and higher conversion rates for the client.',
            },
          ],
        },
      ]) as any,
      media: '{{IMAGE}}',
    },
    {
      position: 'default',
      media: '{{IMAGE-3}}',
      blockType: 'mediaBlock',
      blockName: 'Feature Image',
    },
    {
      blockType: 'content',
      blockName: 'Conclusion',
      columns: [
        {
          size: 'full',
          richText: convertSlateToLexical([
            {
              children: [
                {
                  text: 'Reflection',
                },
              ],
              type: 'h2',
            },
            {
              children: [
                {
                  text: 'The client website redesign project serves as a testament to our commitment to delivering outstanding digital solutions. We are proud to have played a role in elevating their online presence and helping them achieve their business goals. As we look back on this project, we are reminded of the power of collaboration and innovation. If you are interested in exploring how we can transform your digital landscape, please do not hesitate to reach out. We look forward to the opportunity to create your own success story.',
                },
              ],
            },
          ]) as any,
        },
      ],
    },
  ],
  relatedProjects: [], // this is populated by the seed script
}
