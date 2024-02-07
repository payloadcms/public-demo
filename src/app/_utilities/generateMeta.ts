import type { Metadata } from 'next'

import type { Page, Post, Project } from '../../payload/payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'

export const generateMeta = async (args: {
  doc: Page | Post | Project
  type: 'page' | 'post' | 'project'
}): Promise<Metadata> => {
  const { doc } = args || {}

  let pathSegment = ''
  if (args.type === 'project') pathSegment = '/projects'
  if (args.type === 'post') pathSegment = '/posts'
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${pathSegment}/${
    doc?.slug === 'home' ? '' : doc?.slug
  }`

  const ogImage =
    typeof doc?.meta?.image === 'object' &&
    doc?.meta?.image !== null &&
    doc?.meta?.image?.filename !== undefined &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/_next/image?url=${process.env.NEXT_PUBLIC_SERVER_URL}/media/${doc.meta.image.filename}&w=1200&q=75`

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title: doc?.meta?.title || 'Payload',
      url,
    }),
    title: doc?.meta?.title || 'Payload',
  }
}
