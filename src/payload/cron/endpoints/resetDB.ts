import type { Endpoint } from 'payload/config'

import payload from 'payload'

import { seedData } from '../reset'

const collections = ['categories', 'media', 'pages', 'posts', 'projects', 'comments', 'users']
const globals = ['header', 'settings', 'footer']

// endpoint: /reset-db?key=${process.env.PAYLOAD_DEMO_RESET_KEY}
export const resetDB: Omit<Endpoint, 'root'> = {
  handler: async (req, res) => {
    const key = req.query?.key

    if (key === undefined) {
      return res.status(400).json({ error: 'Missing Reset DB key query param.' })
    }

    if (key !== process.env.PAYLOAD_DEMO_RESET_KEY) {
      return res.status(400).json({ error: 'Incorrect Reset DB key.' })
    }

    try {
      await Promise.all([
        ...collections.map(async (collection) =>
          payload.delete({
            collection: collection as 'media',
            where: {},
          }),
        ),
        ...globals.map(async (global) =>
          payload.updateGlobal({
            data: {},
            slug: global as 'header',
          }),
        ),
      ])

      await seedData()

      return res.status(200).json({ message: 'Successfully reset DB from endpoint.' })
    } catch (error: unknown) {
      return res
        .status(500)
        .json({ error, message: `Error resetting DB from endpoint.` })
    }
  },
  method: 'get',
  path: '/reset-db',
}
