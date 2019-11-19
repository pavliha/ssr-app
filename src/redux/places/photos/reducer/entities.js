import { SET_PHOTOS } from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {

    case SET_PHOTOS:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    default:
      return state
  }
}
