import React from 'react'
import css from './ModalMessage.module.scss'
import Button from 'components/Button/Button'
import { ButtonPalettes } from 'utils/const'

const ModalMessage = ({
  title,
  descriptor,
  confirmLabel,
  confirmHandler,
  cancelLabel,
  cancelHandler
}) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>
        { title }
      </h3>
      <p className={css.descriptor}>
        { descriptor }
      </p>
      <div className={css.controls}>
        <Button
          className={css.button}
          label={cancelLabel}
          onClick={cancelHandler}
          palette={ButtonPalettes.DARK}
        />
        <Button
          className={css.button}
          label={confirmLabel}
          onClick={confirmHandler}
        />
      </div>
    </div>
  )
}

export default ModalMessage
