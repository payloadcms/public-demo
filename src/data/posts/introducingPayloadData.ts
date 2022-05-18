export function introducingPayloadData(
  authorId: string,
  categoryId: string,
  imageId: string,
) {
  return {
    title:
      "Introducing Payload - 2021's Node + React Headless CMS for JavaScript Developers",
    author: authorId,
    publishDate: '2021-01-13T05:00:00.000Z',
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
                    text: 'Modern JavaScript developers just got a new headless CMS at their disposal—and it’s one we think they’ll have an absolute blast working with. Payload—a self-hosted Node, Express and React-based headless CMS, is now available.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Hi—my name is James and I’m one of the founders of Payload CMS. After two years of development and thousands of commits, I am extremely excited to announce that Payload CMS is now available to the public. It’s our response to the surprisingly sparse JavaScript CMS market and we hope that its arrival improves the development workflow of engineers all over the world.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Payload has already been put through the test with an array of pilot projects that ranged from video game backend to full e-commerce store development, virtual event platform, and more. Through the projects we’ve released with Payload thus far, our own team’s efficiency has absolutely skyrocketed and we’re confident that it’s only going to get better from here.',
                  },
                ],
              },
              {
                type: 'h4',
                children: [
                  {
                    text: 'Now, we’re finally ready to open up to the community.',
                  },
                ],
              },
              {
                children: [
                  {
                    text: 'We would greatly appreciate if you were to install Payload, give it a shot, and let us know what you think. Any type of feedback is welcome - be it about how we write our docs, about your experience using Payload in your projects, or anything else!',
                  },
                ],
              },
              {
                type: 'h2',
                children: [
                  {
                    text: 'We needed a CMS that didn’t exist',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'We built Payload because, over the years, my team and I have come to understand exactly what we need out of a CMS to build projects—big or small—for our clients:',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '1. Self-hosted.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'What happens when your hosted CMS doesn’t offer you just that ',
                  },
                  {
                    text: 'one',
                    italic: true,
                  },
                  {
                    text: ' thing that you need, so you need to end up opening a REST endpoint to build it? Guess it’s time to maintain your own server or Lambda function. Seems like a racket when you could have just used a self-hosted CMS in the first place and had a server set up already. We’ve been there too many times to let that keep happening.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Third-party hosted CMS might work for simple sites where you know you’ll be able to work within their confines for the lifetime of the app, or for strictly delivering content and not ever having to worry about receiving content, but when your needs become any more advanced, a self-hosted CMS that provides you with complete control is the way to go.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Security is also a concern with third-party hosted CMS solutions. ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://trbl.design/',
                    children: [
                      {
                        text: 'My digital design firm TRBL',
                      },
                    ],
                  },
                  {
                    text: ' works with many clients that are heavily security-focused and want to maintain complete control over their databases and infrastructure. Many of them deploy their CMS within their own private networks—only accessible via VPN or similar. For these clients, maintaining control over their own code is an absolute necessity, which removes many popular third-party hosted CMS from the equation.',
                  },
                ],
              },
              {
                children: [
                  {
                    text: 'Payload is totally self-hosted. You control everything, at all times.',
                  },
                ],
                type: 'h6',
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Find out how to install Payload by ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/getting-started/installation',
                    children: [
                      {
                        text: 'heading to our Docs',
                      },
                    ],
                  },
                  {
                    text: '.',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '2. Customizable React admin panel.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'We want a CMS’ admin panel to be minimal, understandable, and most of all, ',
                  },
                  {
                    text: 'completely customizable',
                    bold: true,
                  },
                  {
                    text: '. If we need to customize a field type, we should be able to swap in our own React field component to take the place of a default text input, for example. We definitely don’t want to jump through any hoops, either, like dealing with messy iFrames or separately developed field type packages.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'If we want to add a view, we should be able to build a React component and add it as a view. If we want to be able to customize the CMS’ branding, and completely white-label the CMS, we should be able to.',
                  },
                ],
              },
              {
                children: [
                  {
                    text: '',
                    underline: true,
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/admin/overview',
                    children: [
                      {
                        text: 'Payload’s Admin panel',
                      },
                    ],
                  },
                  {
                    text: ' is beautiful, fast, and is packed with features. Best part? You can swap in your own React components wherever you want to add / override / control the UI however you need.',
                  },
                ],
                type: 'h6',
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '3. Block-based field editor.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'My team and I design entire sites and apps with a component mentality—even down to how page layouts are assembled. Through UX design phases, we identify all the layout building “blocks” that are necessary to build and then we design our CMS to allow for content editors to self-craft their page layouts using the deliberately designed layout blocks that we’ve provided them with. We then map each “block” in the CMS to React components that have props matching 1:1 to the fields within the CMS block. Boom, component-based layout building.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Like so many others, we started off years ago using WP and Advanced Custom Fields. ACF’s Flexible Content field type is great for layout building. But unfortunately, many other CMS have a complete lack of any layout-building workflow, and even when it’s supported, it lacks functionality or is a shoe-horned solution.',
                  },
                ],
              },
              {
                type: 'h5',
                children: [
                  {
                    text: 'Conditional Logic',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Another thing my team always took for granted in ACF that’s missing from other CMS completely is field-level conditional logic (show this field if another field has a value equal to ',
                  },
                  {
                    text: 'true',
                    code: true,
                  },
                  {
                    text: ' and similar). Our ideal CMS needs to have a built-in way to deliver dynamic interfaces that respond to input accordingly. Such a simple feature makes complex content management so much easier.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload comes with ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/fields/overview',
                    children: [
                      {
                        text: 'extremely advanced field types',
                      },
                    ],
                  },
                  {
                    text: ' including Arrays, Rich Text fields, and most importantly, Blocks. All of them support function-based conditional logic.',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '4. JavaScript top to bottom.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'When’s the last time you worked on a web project without a ',
                  },
                  {
                    text: 'package.json',
                    code: true,
                  },
                  {
                    text: '? Even if you work in PHP, you’re likely going to unavoidably need Node too. The idea of flattening our stack entirely into one language and not having to run a Docker container just to get a local LAMP environment going is a nice one indeed. We want to simplify our stack and keep it all JS. Better yet, TypeScript.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload is written in TypeScript and is JS top to bottom—Node, React, Express, MongoDB.',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '5. Reusable, secure authentication.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'One of the toughest parts about content management systems in-general is that they perform a lot of the lifting that a typical application framework would also need, but fall dramatically short of being able to call themselves an app framework through and through because of their lack of support for reusable authentication. For example, if you wanted to build a full SaaS product, you might need to create products, users, licenses, pages, and maybe even blog posts. Any run-of-the-mill CMS might get you close to being able to CRUD all of this stuff within its system, but what about user authentication? What about having control over users’ access? You’d be more often than not left to fend for yourself. Commonly you’d end up with either rolling your own system from scratch or building out a patchwork of separate systems (and separate admin UIs) to manage the product.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'We need a CMS that comes with robust and reusable authentication right out of the box, so we can leverage the CMS for all our commonly needed authentication functionality. This way, we can keep all of our logic organized and build fully-featured apps right in our CMS that we’ve become accustomed to.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'This way, if a client of ours comes to us asking for a simple app or a marketing site, but in the future, decides that they need to add full e-commerce support, we won’t end up with a messy disconnected set of admin UIs for them to manage their single product within. It can all be done in Payload.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload comes with ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/authentication/overview',
                    children: [
                      {
                        text: 'robust, reusable authentication',
                      },
                    ],
                  },
                  {
                    text: ' right out of the box. The best part—it’s done right, with HTTP-only cookies and CSRF protection built in.',
                  },
                ],
              },
              {
                type: 'h5',
                children: [
                  {
                    text: "Payload's Authentication Operations",
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'In addition to just being able to log in and log out, Payload ships with everything a fully-featured app needs when it comes to authentication:',
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
                        text: 'Self-registration',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Login',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Logout',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Refresh token functionality',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Forgot Password / Reset Password',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Automatic locking of accounts on X number of failed password attempts',
                        bold: true,
                      },
                    ],
                  },
                  {
                    type: 'li',
                    children: [
                      {
                        text: 'Email verification on new account creation',
                        bold: true,
                      },
                    ],
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Payload supports as many authentication-ready collections as you need—meaning you could easily maintain a collection of Admins as well as a collection of Customers—each storing separate information and having separate access control to your documents.',
                  },
                ],
              },
              {
                type: 'h5',
                children: [
                  {
                    text: "Payload's Access Control",
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'One of the best parts about Payload is its ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/access-control/overview',
                    children: [
                      {
                        text: 'function-based Access Control',
                      },
                    ],
                  },
                  {
                    text: '. Right in your configs, you define who can access what documents via extremely simple and straightforward Access Control functions.',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '6. Uploads with local storage.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Other existing CMS provide integrations to third-party file storage solutions, but those come with an additional cost, and one more third-party dependency to maintain. We want to be able to store our own file uploads, in our own contexts. If we want to ship them off to AWS S3 or similar after they’re uploaded locally—then so be it. They should be our files first though. And uploading should be simple to configure.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload comes with ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/upload/overview',
                    children: [
                      {
                        text: 'full upload support',
                      },
                    ],
                  },
                  {
                    text: '. It stores files locally and allows you to write powerful Access Control functions to your files. Only want certain people to be able to download a PDF? No problem.',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '7. Code-based.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'We used the ACF GUI for a while, but then realized we could be much more deliberate if we stored our ACF configs right in the PHP of our site. It was super nice to have written them, understood the code, and have them checked in directly to our repositories. Having our schemas so close to our code made referencing them significantly easier. Nowadays, we don’t find value from GUI schema designers and would rather just write them in code, pending the syntax is concise enough.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload is completely config-based—and its configs are extremely simple to write. You can make full use of ES6 and store your configs directly in your repo. ',
                  },
                  {
                    text: 'Git pull, get your schema.',
                    bold: true,
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '8. Maintain your own Express server.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'We want a CMS with the right level of abstraction. That means giving us the functionality we know we won’t ever need to change, like auth and file upload, while also giving us the freedom to do what we need to do unhindered by a big lumbering framework whose docs are written for people that have Ph.Ds in Computer Science. If we could keep our hands on our own Express server, then we could do whatever we need to do however we need to do it, outside of the CMS. Plus, if we could keep our own Express server, we could combine a CMS with a SSR framework like NextJS if we wanted to. One command, spin up Next and the CMS at once.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload uses your Express server. Not the other way around. Do with it what you must - including using the same server to run a NextJS frontend.',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: '9. Localization support.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'If you’ve ever tried to use WordPress for localized content, by either using it in a multi-site capacity or by using one of the many outdated plugins that are available, you know just how painful it is. If not, here’s a tip: don’t do it. If you’re building a site or app that requires its content to be translated in multiple locales, run away from WP. Look for a CMS that supports localization intrinsically—bonus points if the localization is field-level.',
                  },
                ],
              },
              {
                type: 'h6',
                children: [
                  {
                    text: 'Payload comes with ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/configuration/localization',
                    children: [
                      {
                        text: 'field-based localization support',
                      },
                    ],
                  },
                  {
                    text: ', ready to support any number of locales you need.',
                  },
                ],
              },
              {
                type: 'hr',
                children: [
                  {
                    text: ' ',
                  },
                ],
              },
              {
                type: 'h4',
                children: [
                  {
                    text: 'Payload packages up everything we’ve needed for so long into one CMS and does so with flying colors.',
                  },
                ],
              },
              {
                type: 'hr',
                children: [
                  {
                    text: ' ',
                  },
                ],
              },
              {
                type: 'h4',
                children: [
                  {
                    text: 'You shouldn’t need to learn your CMS',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'To us, and maybe even more important than our list of CMS requirements above, we believe that you should not have to learn a CMS. That’s a passing investment of your time. You should learn to write the language that you’re working in—that’s a permanent investment.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'While building Payload, we’ve taken great strides to ensure that any learning you need to do to get up and running with Payload is kept to the absolute minimum. Instead, you should be learning or practicing JavaScript. Our abstractions are as simple as possible so that you’ll understand how your CMS works, because you will have written it.',
                  },
                ],
              },
              {
                type: 'h4',
                children: [
                  {
                    text: 'You shouldn’t need to fight your CMS',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Ever have that feeling about how when you use a CMS, it gives you 70% of what you need in about five minutes, but then for the last 30%, you end up fighting against it for weeks, if not months?',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Payload aims to fix that. It has a massive emphasis placed on the developer experience. We strive to give you what you need and nothing more. It’s a code-based CMS. That means your code—not ours. We give you the structure and the openendedness that you need to write your apps, but we don’t impose anything on what you need to do.',
                  },
                ],
              },
              {
                type: 'hr',
                children: [
                  {
                    text: ' ',
                  },
                ],
              },
              {
                type: 'h3',
                children: [
                  {
                    text: 'Get up and running with one line',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Getting started is easy—and free. Just fire up a new terminal window and run the following command: npx create-payload-app',
                  },
                ],
              },
              {
                type: 'h5',
                children: [
                  {
                    text: 'Check out our docs',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Take a look through our ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://payloadcms.com/docs/getting-started/what-is-payload',
                    children: [
                      {
                        text: 'documentation',
                      },
                    ],
                  },
                  {
                    text: ' for more information about how Payload works and how to use it.',
                  },
                ],
              },
              {
                type: 'h5',
                children: [
                  {
                    text: 'Let us know what you think',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'Reach out to us on ',
                  },
                  {
                    type: 'link',
                    newTab: false,
                    url: 'https://twitter.com/payloadcms',
                    children: [
                      {
                        text: 'Twitter',
                      },
                    ],
                  },
                  {
                    text: ' to give us your take.',
                  },
                ],
              },
              {
                type: 'h5',
                children: [
                  {
                    text: 'Thank you!',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: 'We honestly want Payload to become the best JavaScript CMS that it possibly can be, and we look forward to continuing to strive to make that happen.',
                  },
                ],
              },
            ],
            links: [
              {
                link: {
                  type: 'custom',
                  label: 'Documentation',
                  url: 'https://payloadcms.com/docs/getting-started/what-is-payload',
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
      title: "Payload CMS - Introducing Payload - Headless CMS for TypeScript Developers",
      description: "Payload—a self-hosted Node, Express and React-based headless CMS, is now available. Best Headless CMS for modern TypeScript development",
      image: imageId,
    },
    createdAt: '2021-01-13T05:00:00.000Z',
    updatedAt: '2021-01-13T05:00:00.000Z',
  };
}
