import cron from 'node-cron'
import payload from 'payload'

import { reset } from './reset'

const cronInterval = '0 * * * *' // every hour
const timezone = 'America/Detroit'

const hitResetEndpoint = async () => {
  try {
    payload.logger.info(`Reset Demo DB key detected.`)
    const req = await fetch(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/reset-db?key=${process.env.PAYLOAD_DEMO_RESET_KEY}`,
    )

    if (req.ok) {
      payload.logger.info(`Database reset successfully at ${new Date().toLocaleString()}`)
    }
  } catch (error) {
    payload.logger.error({
      error,
      msg: 'Failed to reset database with endpoint.',
    })
  }
}

const resetDB = async () => {
  if (process.env.PAYLOAD_DEMO_RESET_KEY !== undefined) {
    await hitResetEndpoint()
  } else {
    await reset()
  }
}

const cronOptions: cron.ScheduleOptions = {
  scheduled: false,
  timezone: timezone,
}

export const resetScheduledJob = cron.schedule(cronInterval, resetDB, cronOptions)
