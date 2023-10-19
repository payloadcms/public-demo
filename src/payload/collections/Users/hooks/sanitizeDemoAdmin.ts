import type { BeforeChangeHook } from 'payload/dist/collections/config/types'

import { adminPassword } from '../../../cron/shared'

export const sanitizeDemoAdmin: BeforeChangeHook = ({
  data,
  originalDoc,
  req,
}) => {
  if (req.user && originalDoc.email === 'demo@payloadcms.com') {
    data.email = originalDoc.email
    data.password = adminPassword
    data.passwordConfirm = adminPassword
  }

  return data
}
