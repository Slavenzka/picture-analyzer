import React from 'react'
import css from './Button.module.scss'
import classnames from 'classnames'
import { ButtonPalettes, ButtonSizes, ButtonTypes } from 'utils/const'
import PropTypes from 'prop-types'
import IconSpinner from 'assets/icons/IconSpinner'

const Button = ({
  className,
  label,
  onClick,
  palette = ButtonPalettes.LIGHT,
  buttonType = ButtonTypes.BUTTON,
  size = ButtonSizes.STANDARD,
  isLoading,
  isDisabled
}) => {
  return (
    <button
      className={classnames(css.button, className, {
        [css.buttonLight]: palette === ButtonPalettes.LIGHT,
        [css.buttonDark]: palette === ButtonPalettes.DARK,
        [css.buttonBordered]: palette === ButtonPalettes.BORDERED,
        [css.buttonLarge]: size === ButtonSizes.LARGE,
        [css.buttonAdd]: buttonType === ButtonTypes.ADD,
        [css.buttonDisabled]: isLoading || isDisabled
      })}
      onClick={onClick}
      type={buttonType}
    >
      {isLoading && <IconSpinner className={css.spinner} />}
      { label }
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  palette: PropTypes.oneOf([ ...Object.values(ButtonPalettes) ]),
  type: PropTypes.oneOf([ ...Object.values(ButtonTypes) ]),
}

export default Button
