import React, { useEffect } from 'react'
import Modal from 'components/Modal/Modal'
import { useDispatch } from 'react-redux'
import { toggleModalVisibility } from 'store/actions'

const withModal = WrappedComponent => {
  return props => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(toggleModalVisibility(null, false))
    },[dispatch, props.location.pathname])

    return (
      <>
        <WrappedComponent {...props} />
        <Modal />
      </>
    )
  }
}

export default withModal
