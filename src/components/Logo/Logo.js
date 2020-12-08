import React from 'react'
import css from './Logo.module.scss'
import IconLogoFull from 'assets/icons/IconLogoFull'
import { Link } from 'react-router-dom'

const Logo = ({
  url
}) => {
  return url
    ? (
      <Link className={css.link} to={url}>
        <IconLogoFull className={css.icon} />
      </Link>
    )
    : <IconLogoFull className={css.icon} />
}

export default Logo
