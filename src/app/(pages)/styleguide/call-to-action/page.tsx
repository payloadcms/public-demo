import type { Metadata } from 'next'

import Link from 'next/link'
import React, { Fragment } from 'react'

import { CallToActionBlock } from '../../../_blocks/CallToAction'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'
import { convertSlateToLexical } from '../../../../payload/utilities/lexical/slateToLexical'

export default function CallToActionPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Call To Action Block</span>
        </p>
        <h1>Call To Action Block</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <CallToActionBlock
          blockType="cta"
          links={[
            {
              link: {
                appearance: 'primary',
                label: 'Lorem ipsum dolor sit amet',
                reference: undefined,
                type: 'custom',
                url: '#',
              },
            },
          ]}
          richText={convertSlateToLexical([
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet',
                },
              ],
              type: 'h4',
            },
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
              ],
            },
          ]) as any}
        />
        <br />
        <br />
        <CallToActionBlock
          blockType="cta"
          invertBackground
          links={[
            {
              link: {
                appearance: 'primary',
                label: 'Lorem ipsum dolor sit amet',
                reference: undefined,
                type: 'custom',
                url: '#',
              },
            },
          ]}
          richText={convertSlateToLexical([
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet',
                },
              ],
              type: 'h4',
            },
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
              ],
            },
          ]) as any}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  description: 'Styleguide for the Call To Action Block',
  openGraph: mergeOpenGraph({
    title: 'Call To Action Block',
    url: '/styleguide/call-to-action',
  }),
  title: 'Call To Action Block',
}
