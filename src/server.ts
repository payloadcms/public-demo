import express from 'express';
import payload from 'payload';
import path from 'path';
import { seed } from './cron/reset';
import { resetScheduledJob } from './cron/jobs';

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();

// Redirect all traffic at root to admin UI
app.get('/', function (_, res) {
  res.redirect('/admin');
});

const start = async () => {
	// Initialize Payload
	await payload.init({
    secret: process.env.PAYLOAD_SECRET_KEY,
    mongoURL: process.env.MONGO_URL,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);

      // Clear and reset database on server start
      // NOTE - this is only for demo purposes and should not be used
      // for production sites with real data
      await seed();
    },
  });

	// Seed database with startup data
	resetScheduledJob.start();

	app.listen(3000);
}

start();
