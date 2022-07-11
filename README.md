# Payload Public Demo

This is the code that powers the official public demo of [Payload CMS](https://github.com/payloadcms/payload).

It's deployed at [https://demo.payloadcms.com](https://demo.payloadcms.com). Go check it out!

### Features shown

This demo showcases many of the powerful features that Payload is capable, including:

1. [Collections](https://payloadcms.com/docs/configuration/collections) and [Globals](https://payloadcms.com/docs/configuration/globals)
1. Use of Payload's [Local Node API](https://payloadcms.com/docs/local-api/overview) to [seed and reset initial demo data](https://github.com/payloadcms/public-demo/blob/master/src/cron/reset.ts) each time the app starts
1. [Access Control](https://payloadcms.com/docs/access-control/overview) to restrict who can do what to the public demo's data
1. [Versions](https://payloadcms.com/docs/versions/overview) and [Drafts](https://payloadcms.com/docs/versions/drafts) functionality
1. A great pattern for how to create [reusable fields](https://github.com/payloadcms/public-demo/tree/master/src/fields) that can be used and re-used easily
1. Field-based [localization](https://payloadcms.com/docs/configuration/localization)
1. Many advanced field types, including the [relationship](https://payloadcms.com/docs/fields/relationship), [blocks](https://payloadcms.com/docs/fields/blocks), [array](https://payloadcms.com/docs/fields/array), and many more 
1. The official [Payload SEO plugin](https://github.com/payloadcms/plugin-seo)
1. The official [Payload Form Builder plugin](https://github.com/payloadcms/plugin-form-builder)
1. The official [Payload Nested Docs plugin](https://github.com/payloadcms/plugin-nested-docs)
1. Custom [React admin panel components](https://github.com/payloadcms/public-demo/tree/master/src/components)
1. Auto-generated [TypeScript types](https://github.com/payloadcms/public-demo/blob/master/src/payload-types.ts)

Each time you fire up the server—either in development or production, this demo will clear out your database and populate it with new records. If you're planning to use this for production purposes, make sure you remove the included code that's responsible for this, otherwise you will lose your data each time you restart your server!

### Running locally

You can clone this repo to your own computer and play around super easily.

To do so, you'll need the following software:

- Yarn or NPM
- NodeJS version 10+
- A Mongo Database - **IMPORTANT: you need to either have MongoDB running locally, or have signed up for a free MongoDB Atlas server in order to test this repo locally.**

##### Local installation steps:

**1. Clone the repo by running the following command at your terminal:**

```bash
git clone git@github.com:payloadcms/public-demo.git
```

**Navigate to folder and install dependencies**

Type `cd ./public-demo` and then `yarn` or `npm install --legacy-peer-deps` to add all required dependencies.

**Duplicate the example `.env` file and fill in your own values**

Type `cp .env.example .env` in your terminal to make a copy of the example `.env` file, and then edit that file to fill in your own values.

Typically, the only line that you'll need to change within your new `.env` for local development is the `MONGO_URL` value. If you have MongoDB running locally, then you can use the example connection string, but if you are using Mongo Atlas or similar, you'll want to fill this value in with your own connection string.

**Fire up the development server**

Finally, type `yarn dev` to start up the server and see it in action!

