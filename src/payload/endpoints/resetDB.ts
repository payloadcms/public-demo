import type { Endpoint } from 'payload/config'

import { clearDB, seedDB } from '../cron/reset'

// endpoint: /reset-db?key=${process.env.PAYLOAD_DEMO_RESET_KEY}
export const resetDBEndpoint: Omit<Endpoint, 'root'> = {
  handler: async (req, res) => {
    const key = req.query?.key

    if (key === undefined) {
      return res.status(400).json({ error: 'Missing Reset DB key query param.' })
    }

    if (key !== process.env.PAYLOAD_DEMO_RESET_KEY) {
      return res.status(400).json({ error: 'Incorrect resetDB key.' })
    }

    await clearDB()
    await seedDB()

    return res.status(200).json({ message: 'Successfully reset the DB from endpoint.' })
  },
  method: 'get',
  path: '/reset-db',
}


export const clearDBEndpoint: Omit<Endpoint, 'root'> = {
  handler: async (req, res) => {
    const key = req.query?.key

    if (key === undefined) {
      return res.status(400).json({ error: 'Missing key query param.' })
    }

    if (key !== process.env.PAYLOAD_DEMO_RESET_KEY) {
      return res.status(400).json({ error: 'Incorrect clearDB key.' })
    }

    await clearDB()

    return res.status(200).json({ message: 'Successfully cleared the DB from endpoint.' })
  },
  method: 'get',
  path: '/clear-db',
}

export const seedDBEndpoint: Omit<Endpoint, 'root'> = {
  handler: async (req, res) => {
    const key = req.query?.key

    if (key === undefined) {
      return res.status(400).json({ error: 'Missing key query param.' })
    }

    if (key !== process.env.PAYLOAD_DEMO_RESET_KEY) {
      return res.status(400).json({ error: 'Incorrect seedDB key.' })
    }

    await seedDB()

    return res.status(200).json({ message: 'Successfully seeded the DB from endpoint.' })
  },
  method: 'get',
  path: '/seed-db',
}
