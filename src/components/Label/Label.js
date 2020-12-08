import React from 'react'
import css from './Label.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Label = ({
  className,
  id,
  label,
}) => {
  return id
    ? (
      <label
        className={classnames(css.label, className)}
        htmlFor={id}
        dangerouslySetInnerHTML={{__html: label}}
      />
    )
    : (
      <label
        className={classnames(css.label, className)}
        dangerouslySetInnerHTML={{__html: label}}
      />
    )
}

Label.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
}

export default Label
