import React from 'react'
import css from './InnerContentWrapper.module.scss'
import classnames from 'classnames'
import Heading from 'components/Heading/Heading'
import { DEFAULT_SUBHEADING, HeadingTypes } from 'utils/const'
import PropTypes from 'prop-types'

const InnerContentWrapper = ({
  actionButton,
  children,
  className,
  heading = DEFAULT_SUBHEADING,
}) => (
  <div className={classnames(css.wrapper, className)}>
    <div className={css.top}>
      <Heading label={heading} type={HeadingTypes.SUBHEADING} />
      { actionButton }
    </div>
    <div className={css.content}>
      { children }
    </div>
  </div>
)

InnerContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  heading: PropTypes.string
}

export default InnerContentWrapper
