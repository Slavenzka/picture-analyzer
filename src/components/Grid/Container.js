import React from 'react'
import css from './Container.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Container = ({
  children,
  className,
}) => (
  <div className={classnames(css.wrapper, className)}>
    { children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Container
