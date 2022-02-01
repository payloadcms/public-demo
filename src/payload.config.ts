import { buildConfig } from 'payload/config';
import path from 'path';
import dotenv from 'dotenv';
import Categories from './collections/Categories';
import Media from './collections/Media';
import Posts from './collections/Posts';
import Users from './collections/Users';
import Pages from './collections/Pages';
import MainMenu from './globals/MainMenu';
import FormBuilder from './plugins/formBuilder';
import breadcrumbs from './plugins/breadcrumbs';
import seo from './plugins/seo';
import BeforeLogin from './components/BeforeLogin';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    indexHTML: path.resolve(__dirname, './index.html'),
    user: Users.slug,
		components: {
			beforeLogin: [
				BeforeLogin,
			],
		},
  },
  collections: [
    Categories,
		Media,
    Posts,
    Pages,
    Users,
  ],
	globals: [
		MainMenu,
	],
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },
  plugins: [
    FormBuilder({}),
    breadcrumbs({
      collections: ['pages'],
      parentFieldSlug: 'parent',
      breadcrumbsFieldSlug: 'breadcrumbs',
      generateLabel: (_, doc) => doc.title as string,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    seo({
      collections: [
        'pages',
        'posts',
      ],
    }),
  ],
	localization: {
		defaultLocale: 'en',
		locales: [
			'en',
			'es',
			'de'
		],
	},
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
