import * as c from '../constants'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {

    case c.SET_PLACES:
      return {
        ...state,
        ...arrayToObject(payload),
      }

    case c.SET_PLACE:
      return {
        ...state,
        [payload.id]: payload,
      }

    case c.REMOVE_PLACE: {
      const places = { ...state }
      delete places[payload]

      return places
    }

    default:
      return state
  }
}
