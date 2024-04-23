import type { Metadata } from 'next'

import { Suspense } from 'react'
import React from 'react'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'
import classes from './index.module.scss'

// Using `useSearchParams` from `next/navigation` causes the entire route to de-optimize into client-side rendering
// To fix this, we wrap the component in a `Suspense` component
// See https://nextjs.org/docs/messages/deopted-into-client-rendering for more info

export default function ResetPassword() {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>Reset Password</h1>
      <p>Please enter a new password below.</p>
      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </Gutter>
  )
}

export const metadata: Metadata = {
  description: 'Enter a new password.',
  openGraph: mergeOpenGraph({
    title: 'Reset Password',
    url: '/reset-password',
  }),
  title: 'Reset Password',
}
