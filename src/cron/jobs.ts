import cron from 'node-cron';
import { resetDatabase } from './resetDatabase';

const cronOptions: cron.ScheduleOptions = {
  timezone: 'America/Detroit',
  scheduled: false,
};

export const resetDbJob = cron.schedule('* * * * *', resetDatabase, cronOptions);
