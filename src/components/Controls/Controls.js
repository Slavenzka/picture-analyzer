import React from 'react'
import css from './Controls.module.scss'
import classnames from 'classnames'
import { ButtonPalettes, ButtonTypes } from 'utils/const'
import Button from 'components/Button/Button'

const Controls = ({
  className,
  submitLabel,
  resetLabel,
  resetHandler
}) => {
  return (
    <div className={classnames(css.wrapper, className)}>
      <Button
        label={submitLabel}
        buttonType={ButtonTypes.SUBMIT}
      />
      <Button
        className={css.buttonCancel}
        label={resetLabel}
        onClick={resetHandler}
        palette={ButtonPalettes.DARK}
        buttonType={ButtonTypes.BUTTON}
      />
    </div>
  )
}

export default Controls
