import React, { useEffect, useRef } from 'react'
import css from './ContextMenu.module.scss'
import classnames from 'classnames'
import SimpleBar from 'simplebar-react'
import { useDispatch } from 'react-redux'
import { toggleModalVisibility } from 'store/actions'
import CreateVariable from 'components/CreateVariable/CreateVariable'

const ContextMenu = ({
  className,
  closeMenu,
  variables = [],
  handleClickExistingVariable,
  isOpened,
  x,
  y,
  selectedText
}) => {
  const dispatch = useDispatch()
  const menuRef = useRef(null)
  const createMenuRef = node => menuRef.current = node

  useEffect(() => {
    const handleClickOutside = evt => {
      if (menuRef.current && !menuRef.current.contains(evt.target)) {
        closeMenu()
      }
    }

    if (isOpened) {
      document.addEventListener('click', handleClickOutside)
    }
  }, [isOpened, closeMenu])

  const items = variables.map((variable, index) => (
    <div className={css.item} key={`Variable item in context#${index}`}>
      <button
        onClick={() => {
          handleClickExistingVariable(variable)
          closeMenu()
        }}
        className={css.button}
        type='button'
      >
        { variable }
      </button>
    </div>
  ))

  return (
    <div
      className={classnames(css.list, className, { [css.listOpened]: isOpened })}
      style={{
        left: x,
        top: y,
      }}
      ref={createMenuRef}
    >
      <SimpleBar
        style={{
          height: '14.8rem',
          width: '18.6rem'
        }}
        autoHide={false}
      >
        { items }
        <div className={css.item} key={`Variable item in context - create variable`}>
          <button
            onClick={() => {
              dispatch(toggleModalVisibility(<CreateVariable initialName={selectedText} />, true))
              closeMenu()
            }}
            className={css.button}
            type='button'
          >
            + создать переменную
          </button>
        </div>
      </SimpleBar>
    </div>
  )
}

export default ContextMenu
