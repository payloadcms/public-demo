import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  description: 'An open-source website built with Payload and Next.js.',
  images: [
    {
      url: 'https://payloadcms.com/images/og-image.jpg',
    },
  ],
  siteName: 'Payload Public Demo',
  title: 'Payload Public Demo',
  type: 'website',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
