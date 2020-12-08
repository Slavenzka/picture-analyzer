import {
  SET_CURRENT_FONT_SIZE,
} from 'store/actions/actionTypes'

const initialState = {
  config: {
    baseSize: 10,
    baseWidth: process.env.REACT_APP_BASE_WIDTH_DESKTOP,
    widthLimit: process.env.REACT_APP_WIDTH_LIMIT_DESKTOP
  },
  curFontSize: 10
}

export default function ElasticAdaptive (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_FONT_SIZE:
      return {
        ...state,
        curFontSize: action.payload
      }
    default:
      return state
  }
}
