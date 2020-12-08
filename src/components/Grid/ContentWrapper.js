import React from 'react'
import css from './Container.module.scss'
import classnames from 'classnames'

const ContentWrapper = ({ className, children }) => (
  <div className={classnames(css.contentWrapper, className)}>
    { children }
  </div>
)

export default ContentWrapper
