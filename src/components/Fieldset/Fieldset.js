import React from 'react'
import css from './Fieldset.module.scss'
import classnames from 'classnames'

const Fieldset = ({
  children,
  className,
  columns = 1
}) => {
  return (
    <fieldset
      className={classnames(css.fieldset, className, {
        [css.fieldsetDouble]: columns === 2,
        [css.fieldsetTriple]: columns === 3
      })}
    >
      { children }
    </fieldset>
  )
}

export default Fieldset
