import { SET_CONTACTS } from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {

    case SET_CONTACTS:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    default:
      return state
  }
}
