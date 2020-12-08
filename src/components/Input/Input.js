import React from 'react'
import css from './Input.module.scss'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { InputStyles } from 'utils/const'

const Input = ({
  className,
  defaultValue,
  id,
  isDisabled = false,
  isError,
  name,
  onClick,
  placeholder = 'Введите значение',
  registerInForm,
  style,
  type = 'text',
  ...props
}) => {
  const TagName = type === 'textarea' ? 'textarea' : 'input'
  return (
    <TagName
      className={classnames(css.input, className, {
        [css.inputResult]: style === InputStyles.RESULT,
        [css.inputTextarea]: type === 'textarea',
        [css.inputError]: isError,
      })}
      defaultValue={defaultValue}
      id={id}
      name={name}
      onClick={onClick}
      placeholder={placeholder}
      ref={registerInForm}
      type={type}
      disabled={isDisabled}
      {...props}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  registerInForm: PropTypes.func,
  type: PropTypes.string
}

export default Input
