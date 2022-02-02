import cron from 'node-cron';
import { reset } from './reset';

const cronOptions: cron.ScheduleOptions = {
  timezone: 'America/Detroit',
  scheduled: false,
};

export const resetScheduledJob = cron.schedule('0 * * * *', reset, cronOptions);
