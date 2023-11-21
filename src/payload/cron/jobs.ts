import cron from 'node-cron'

import { reset } from './reset'

const cronOptions: cron.ScheduleOptions = {
  scheduled: false,
  timezone: 'America/Detroit',
}

const resetDB = async () => {
  try {
    if (process.env.PAYLOAD_DEMO_RESET_KEY !== undefined) {
      await fetch(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/resetDB?key=${process.env.PAYLOAD_DEMO_RESET_KEY}`,
        { method: 'POST' },
      )
    } else {
      reset
    }
  } catch (error) {
    console.log(`Error occurred during scheduled database reset: ${error}`)
  }
}

export const resetScheduledJob = cron.schedule('0 * * * *', resetDB, cronOptions)
