'use client'

// import { useLivePreview } from '@payloadcms/live-preview-react'
import React from 'react'

import type { Page } from '../../../payload/payload-types'

import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'

export const PageClient: React.FC<{
  page: Page
}> = ({ page: initialPage }) => {
  // const { data } = useLivePreview<Page>({
  //   depth: 1,
  //   initialData: initialPage,
  //   serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  // })

  return (
    <React.Fragment>
      <Hero {...initialPage.hero} />
      <Blocks
        blocks={initialPage.layout}
        disableTopPadding={
          !initialPage.hero ||
          initialPage.hero?.type === 'none' ||
          initialPage.hero?.type === 'lowImpact'
        }
      />
    </React.Fragment>
  )
}
