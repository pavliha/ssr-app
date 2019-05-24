import { SET_ASSET, SET_ASSETS, REMOVE_ASSET } from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_ASSETS:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_ASSET:
      return {
        ...state,
        [payload.id]: payload,
      }

    case REMOVE_ASSET: {
      const assets = { ...state }
      delete assets[payload]

      return assets
    }

    default:
      return state
  }
}
