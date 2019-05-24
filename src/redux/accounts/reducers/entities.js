import { SET_ACCOUNT, SET_ACCOUNTS, REMOVE_ACCOUNT } from '../action'
import arrayToObject from 'utils/arrayToObject'


const accountsReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case SET_ACCOUNT:
      return {
        ...state,
        [payload.id]: payload,
      }

    case SET_ACCOUNTS:
      return {
        ...state,
        ...arrayToObject(payload),
      }

    case REMOVE_ACCOUNT: {
      const accounts = { ...state }
      delete accounts[payload]

      return accounts
    }

    default:
      return state
  }
}

export default accountsReducer
