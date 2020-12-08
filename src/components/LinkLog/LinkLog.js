import React from 'react'
import css from './LinkLog.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import IconLog from 'assets/icons/IconLog'

const DefaultLog = {
  label: 'История обновлений',
  url: '/'
}

const LinkLog = ({
  className,
  label = DefaultLog.label,
  url = DefaultLog.url
}) => (
  <Link to={url} className={classnames(css.log, className)}>
    { label }
    <IconLog className={css.iconLog} />
  </Link>
)

export default LinkLog
