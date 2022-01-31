import express from 'express';
import payload from 'payload';
import path from 'path';
import { resetDatabase } from './cron/resetDatabase';
import { resetDbJob } from './cron/jobs';

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
    await resetDatabase(); // Reset on start
  },
});

// Cron jobs
resetDbJob.start();

app.listen(3000);
