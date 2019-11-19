import { SET_PLACE, SET_PLACES, REMOVE_PLACE } from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_PLACES:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_PLACE:
      return {
        ...state,
        [payload.id]: payload,
      }

    case REMOVE_PLACE: {
      const places = { ...state }
      delete places[payload]

      return places
    }

    default:
      return state
  }
}
