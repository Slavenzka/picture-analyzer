import React from 'react'
import css from './LinkBack.module.scss'
import { DefaultBacklink } from 'utils/const'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import IconArrowBack from 'assets/icons/IconArrowBack'
import PropTypes from 'prop-types'
import { HOME } from 'Pages/Routes'

const LinkBack = ({
  className,
  label = DefaultBacklink.LABEL,
  url = HOME
}) => (
  <Link
    className={classNames(css.link, className)}
    to={url}
  >
    <IconArrowBack className={css.icon} />
    { label }
  </Link>
)

LinkBack.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string
}

export default LinkBack
