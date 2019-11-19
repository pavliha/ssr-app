import { SET_ENTERTAINMENT, SET_ENTERTAINMENTS, REMOVE_ENTERTAINMENT } from '../action'
import { arrayToObject } from 'utils'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ENTERTAINMENTS:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_ENTERTAINMENT:
      return {
        ...state,
        [payload.id]: payload,
      }

    case REMOVE_ENTERTAINMENT: {
      const entertainments = { ...state }
      delete entertainments[payload]

      return entertainments
    }

    default:
      return state
  }
}
