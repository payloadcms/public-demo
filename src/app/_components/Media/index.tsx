import React from 'react'

import type { Props } from './types'

import { Image } from './Image'
import { Video } from './Video'

export const Media: React.FC<Props> = (props) => {
  const { resource } = props

  const isVideo = typeof resource !== 'string' && resource?.mimeType?.includes('video')

  return (
    <React.Fragment>
      {isVideo ? (
        <Video {...props} />
      ) : (
        <Image {...props} /> // eslint-disable-line
      )}
    </React.Fragment>
  )
}
