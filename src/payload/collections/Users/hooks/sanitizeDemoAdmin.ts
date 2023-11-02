import type { BeforeOperationHook } from 'payload/dist/collections/config/types'

import { adminEmail, adminPassword } from '../../../cron/shared'

export const sanitizeDemoAdmin: BeforeOperationHook = ({ args, operation }) => {
  if (operation === 'update') {
    if (
      args.data &&
      'email' in args.data &&
      'password' in args.data &&
      args.req.user.email === adminEmail
    ) {
      args.data.password = adminPassword
    }
  }

  return args
}
