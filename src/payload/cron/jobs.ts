import cron from 'node-cron'

import { reset } from './reset'

const cronOptions: cron.ScheduleOptions = {
  scheduled: false,
  timezone: 'America/Detroit',
}

export const resetScheduledJob = cron.schedule('0 * * * *', reset, cronOptions)
