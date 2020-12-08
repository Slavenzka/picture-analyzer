import { TOGGLE_MODAL_VISIBILITY_STATUS } from 'store/actions/actionTypes'

export const toggleModalVisibility = (contentComponent, newStatus) => {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_MODAL_VISIBILITY_STATUS,
      payload: {
        content: contentComponent,
        status: typeof newStatus === 'boolean' ? newStatus : !getState.isModalVisible,
      }
    })
  }
}
