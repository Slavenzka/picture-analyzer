import React from 'react'
import css from './Backlink.module.scss'
import { Link } from 'react-router-dom'
import { HOME } from 'Pages/Routes'
import IconArrowBack from 'assets/icons/IconArrowBack'
import classnames from 'classnames'

const Backlink = ({
  className,
  label = 'Назад',
  url = HOME
}) => {
  return (
    <Link className={classnames(css.link, className)} to={url}>
      <IconArrowBack className={css.icon} />
      { label }
    </Link>
  )
}

export default Backlink
