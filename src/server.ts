import express from 'express';
import payload from 'payload';
import path from 'path';
import { reset } from './cron/reset';
import { resetScheduledJob } from './cron/jobs';

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();

app.get('/', function(_, res){
	res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET_KEY,
  mongoURL: process.env.MONGO_URL,
  express: app,
	license: process.env.PAYLOAD_LICENSE_KEY,
  onInit: async () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    await reset(); // Reset on start
  },
});

// Cron jobs
resetScheduledJob.start();

app.listen(3000);
