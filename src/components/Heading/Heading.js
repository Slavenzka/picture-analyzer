import React from 'react'
import css from './Heading.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { HeadingTypes } from 'utils/const'

const Heading = ({
  className,
  label,
  type = HeadingTypes.HEADING
}) => {
  const TagName = type === HeadingTypes.HEADING
    ? 'h2'
    : 'h3'

  return (
    <TagName
      className={classnames(className, {
        [css.heading]: type === HeadingTypes.HEADING,
        [css.subheading]: type === HeadingTypes.SUBHEADING,
      })}
    >
      { label }
    </TagName>
  )
}

Heading.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf([ ...Object.values(HeadingTypes) ])
}

export default Heading
