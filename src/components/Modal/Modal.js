import React, { useEffect, useRef } from 'react'
import css from './Modal.module.scss'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalVisibility } from 'store/actions'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

const Modal = () => {
  const contentRef = useRef(null)
  const modal = useSelector(state => state.ui.modal)
  const dispatch = useDispatch()
  const { isVisible, content } = modal

  const createContentRef = node => contentRef.current = node

  useEffect(() => {
    // TODO fix handle click outside with react-select in create variable modal
    // const handleClickOutside = evt => {
    //   if (isVisible && contentRef.current && !contentRef.current.contains(evt.target)) {
    //     console.log(contentRef.current)
    //     console.log(evt.target)
    //     console.log(!contentRef.current.contains(evt.target))
    //     dispatch(toggleModalVisibility(null, false))
    //   }
    // }

    const handleEscPress = evt => {
      if (evt.key === 'Escape' || evt.keyCode === 27 || evt.key === 'Esc') {
        dispatch(toggleModalVisibility(null, false))
      }
    }

    if (isVisible) {
      // document.addEventListener('click', handleClickOutside)
      document.addEventListener('keydown', handleEscPress)
      disableBodyScroll(contentRef.current, {
        reserveScrollBarGap: true
      })
    }

    return () => {
      // document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscPress)
      clearAllBodyScrollLocks()
    }
  }, [isVisible, dispatch])

  return (
    <div
      className={classnames(css.modal, { [css.modalOpened]: isVisible })}
    >
      {content &&
        <div ref={createContentRef}>
          {content}
        </div>
      }
    </div>
  )
}

export default Modal
