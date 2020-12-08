import {
  TOGGLE_MODAL_VISIBILITY_STATUS
} from 'store/actions/actionTypes'
import { updateObject } from 'utils'

const initialState = {
  modal: {
    isVisible: false,
    content: null
  }
}

export default function ui (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY_STATUS: return updateObject(state, { modal: {
        isVisible: action.payload.status,
        content: action.payload.content
      }})
    default:
      return state
  }
}
