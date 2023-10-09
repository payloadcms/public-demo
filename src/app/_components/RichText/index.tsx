import React from 'react'

import { serializeLexical } from './lexicalToReact'
import serialize from './serialize'

import classes from './index.module.scss'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return (
    <div className={[classes.richText, className].filter(Boolean).join(' ')}>
      {content && !Array.isArray(content) && typeof content === 'object' && 'root' in content
        ? serializeLexical({ nodes: content?.root?.children })
        : serialize(content)}
    </div>
  )
}

export default RichText
