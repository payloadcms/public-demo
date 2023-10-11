import dotenv from 'dotenv'
import path from 'path'

import { resetScheduledJob } from './payload/cron/jobs'
import { seed } from './payload/cron/reset'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import express from 'express'
import payload from 'payload'

const app = express()
const PORT = process.env.PORT || 3000

// Redirect root to the admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

const start = async (): Promise<void> => {
  await payload.init({
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)

      // Clear and reset database on server start
      // NOTE - this is only for demo purposes and should not be used
      // for production sites with real data
      await seed()
    },
    secret: process.env.PAYLOAD_SECRET || '',
  })

  // Seed database with startup data
  resetScheduledJob.start()

  app.listen(PORT, () => {
    payload.logger.info(`App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
  })
}

void start()
