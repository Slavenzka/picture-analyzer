import {
  SET_USER_TO_AUTHENTICATED
} from 'store/actions/actionTypes'
import { updateObject } from 'utils'

const initialState = {
  isUserAuthenticated: false
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case SET_USER_TO_AUTHENTICATED: return updateObject(state, { isUserAuthenticated: true })
    default:
      return state
  }
}
