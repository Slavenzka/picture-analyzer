import React from 'react'
import css from './ModalContentWrapper.module.scss'
import Button from 'components/Button/Button'
import { ButtonPalettes, ButtonTypes } from 'utils/const'

const ModalContentWrapper = ({
  children,
  heading,
  closeButtonLabel = 'Отменить',
  closeButtonHandler,
  saveButtonLabel = 'Сохранить',
  onSubmit
}) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>
        { heading }
      </h3>
      <form onSubmit={onSubmit}>
        <div className={css.content}>
          { children }
        </div>
        <div className={css.controls}>
          <Button
            className={css.button}
            label={closeButtonLabel}
            onClick={closeButtonHandler}
            palette={ButtonPalettes.DARK}
          />
          <Button
            className={css.button}
            label={saveButtonLabel}
            buttonType={ButtonTypes.SUBMIT}
          />
        </div>
      </form>
    </div>
  )
}

export default ModalContentWrapper
