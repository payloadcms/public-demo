/* eslint-disable react/no-unescaped-entities */
import { Banner, Check } from 'payload/components'
import React from 'react'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner type="success">
        <Check />
        <strong>CZSoft</strong>
      </Banner>
    </div>
  )
}

export default BeforeDashboard
