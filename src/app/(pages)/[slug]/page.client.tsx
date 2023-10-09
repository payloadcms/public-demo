'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { Page } from '../../../payload/payload-types'
import { Blocks } from '../../_components/Blocks'
import { Hero } from '../../_components/Hero'

export const PageClient: React.FC<{
  page: Page
}> = ({ page: initialPage }) => {
  const { data } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    depth: 2,
  })

  console.log(data)

  return (
    <React.Fragment>
      <Hero {...data.hero} />
      <Blocks
        blocks={data.layout}
        disableTopPadding={
          !data.hero || data.hero?.type === 'none' || data.hero?.type === 'lowImpact'
        }
      />
    </React.Fragment>
  )
}
