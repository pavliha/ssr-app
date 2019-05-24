import { SET_CURRENT_INVITE } from '../action'

const initialState = {
  invite_id: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_INVITE:
      return {
        ...state,
        invite_id: payload,
      }
    default:
      return state
  }
}
