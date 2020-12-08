import React from 'react'
import css from './LinkCard.module.scss'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import IconPlus from 'assets/icons/IconPlus'
import IconSpinner from 'assets/icons/IconSpinner'

export const LinkCardTypes = {
  STANDARD: 'standard',
  CREATION: 'creation'
}

const LinkCard = ({
  className,
  label,
  counter,
  url,
  type = LinkCardTypes.STANDARD,
  isLoading = false,
  isDisabled = false
}) => {
  return (
    <Link
      className={classnames(css.link, className, {
        [css.linkCreate]: type === LinkCardTypes.CREATION,
        [css.linkDisabled]: isDisabled
      })}
      to={url}
    >
      {type === LinkCardTypes.CREATION &&
        <IconPlus className={css.icon} />
      }
      {isLoading && <IconSpinner className={css.spinner} />}
      {!isLoading &&
        <span className={css.counter}>
          {counter}
        </span>
      }
      <span className={css.label}>
        { label }
      </span>
    </Link>
  )
}

export default LinkCard
