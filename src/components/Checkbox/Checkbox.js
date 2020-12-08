import React from 'react'
import css from './Checkbox.module.scss'
import classnames from 'classnames'
import IconCheckbox from 'assets/icons/IconCheckbox'

const Checkbox = ({
  className,
  changeHandler,
  id,
  isChecked,
  isDisabled,
}) => {
  return (
    <>
      <input
        className={classnames(css.input, className, {
          [css.checkboxDisabled]: isDisabled
        })}
        type='checkbox'
        checked={isChecked}
        onChange={() => {}}
        id={id}
      />
      <label
        htmlFor={id}
        onClick={changeHandler}
      >
        <IconCheckbox className={css.iconCheck} />
      </label>
    </>
  )
}

export default Checkbox
