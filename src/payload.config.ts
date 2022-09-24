import { buildConfig } from 'payload/config';
import formBuilder from '@payloadcms/plugin-form-builder';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import seo from '@payloadcms/plugin-seo';
import path from 'path';
import dotenv from 'dotenv';
import Categories from './collections/Categories';
import Media from './collections/Media';
import Posts from './collections/Posts';
import Users from './collections/Users';
import Pages from './collections/Pages';
import MainMenu from './globals/MainMenu';
import BeforeLogin from './components/BeforeLogin';
import AfterDashboard from "./components/AfterDashboard";
import { Alerts } from './collections/Alerts'
import BeforeDashboard from './components/BeforeDashboard';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

// the payload config is the entrypoint for configuring the entire application
// all the API REST, GraphQL, authentication, file uploads, data layer and admin UI is built from the config
export default buildConfig({
  // the serverURL can be localhost:, a public domain or simply left undefined to work with relative
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    // the user collection slug to use for authenticating to the admin panel, one per express app
    user: Users.slug,

    // override existing payload styles with custom look
    css: path.resolve(__dirname, './styles/custom.scss'),

    // custom components added to show demo info
    components: {
      beforeLogin: [
        BeforeLogin,
      ],
      beforeDashboard: [
        BeforeDashboard,
      ],
      afterDashboard: [
        AfterDashboard,
      ],
    },
  },

  // collections in Payload are synonymous with database tables, models or entities from other frameworks and systems
  collections: [
    Categories,
    Media,
    Posts,
    Pages,
    Users,
    Alerts,
  ],

  // globals are a single-instance collection, often used for navigation or site settings that live in one place
  globals: [
    MainMenu,
  ],

  // rateLimits provide basic API DDOS (Denial-of-service) protection and can limit accidental server load from scripts
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },

  // GraphQL is included by default at /api/graphql
  graphQL: {
    disablePlaygroundInProduction: false,
  },

  // if not using graphQL it should be disabled for security and performance reasons
  // graphQL: false

  plugins: [
    formBuilder({
      formOverrides: {
        admin: {
          group: 'Content',
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Admin',
        },
      },
      redirectRelationships: ['pages', 'posts'],
    }),
    // @ts-ignore
    nestedDocs({
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

  // optional customization of routes
  routes: {
    api: '/api',
    admin: '/admin',
    graphQL: '/graphql',
    graphQLPlayground: '/graphql-playground',
  },

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
