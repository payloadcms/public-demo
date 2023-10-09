import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { ContentBlock } from '../../../_blocks/Content'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function ContentBlockPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Content Block</span>
        </p>
        <h1>Content Block</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <ContentBlock
          blockType="content"
          columns={[
            {
              size: 'full',
              richText: {
                root: {
                  children: [
                    {
                      children: [
                        {
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                          type: 'text',
                          version: 1,
                        },
                      ],
                      direction: null,
                      format: '',
                      indent: 0,
                      type: 'paragraph',
                      version: 1,
                    },
                  ],
                  direction: null,
                  format: '',
                  indent: 0,
                  type: 'root',
                  version: 1,
                },
              } as any,
            },
          ]}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Content Block',
  description: 'Styleguide for the Content Block',
  openGraph: mergeOpenGraph({
    title: 'Content Block',
    url: '/styleguide/content-block',
  }),
}
