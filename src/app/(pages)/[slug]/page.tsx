import type { Metadata } from 'next'

import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import React from 'react'

import type { Page } from '../../../payload/payload-types'

import { staticHome } from '../../../payload/seed/home-static'
import { fetchDoc } from '../../_api/fetchDoc'
import { fetchDocs } from '../../_api/fetchDocs'
import { generateMeta } from '../../_utilities/generateMeta'
import { PageClient } from './page.client'

export const dynamic = 'force-dynamic'

export default async function Page({ params: { slug = 'home' } }) {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      draft: isDraftMode,
      slug,
    })
  } catch (error) {
    return notFound()
  }

  // if no `home` page exists, render a static one using dummy content
  // you should delete this code once you have a home page in the CMS
  // this is really only useful for those who are demoing this template
  // if (!page && slug === 'home') {
  //   page = staticHome
  // }

  if (!page) {
    return notFound()
  }

  return <PageClient page={page} />
}

export async function generateStaticParams() {
  try {
    const pages = await fetchDocs<Page>('pages')
    return pages?.map(({ slug }) => slug)
  } catch (error) {
    return []
  }
}

export async function generateMetadata({ params: { slug = 'home' } }): Promise<Metadata> {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      draft: isDraftMode,
      slug,
    })
  } catch (error) {
    return notFound()
  }

  // if (!page) {
  //   if (slug === 'home') page = staticHome
  // }

  return generateMeta({ doc: page })
}
