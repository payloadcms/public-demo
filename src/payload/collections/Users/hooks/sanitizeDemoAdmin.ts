import type { BeforeChangeHook } from 'payload/dist/collections/config/types'

export const sanitizeDemoAdmin: BeforeChangeHook = ({
  data,
  originalDoc,
  req,
}) => {
  if (req.user && originalDoc.email === 'demo@payloadcms.com') {
    data.email = originalDoc.email
    data.password = originalDoc.password
  }

  return data
}
