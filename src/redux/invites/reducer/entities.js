import {
  SET_INVITE,
  SET_INVITES,
  REMOVE_INVITE,
} from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_INVITES:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_INVITE:
      return {
        ...state,
        [payload.id]: payload,
      }

    case REMOVE_INVITE: {
      const invites = { ...state }
      delete invites[payload]

      return invites
    }

    default:
      return state
  }
}
