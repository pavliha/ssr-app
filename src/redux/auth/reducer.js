import { LOGOUT_USER, SET_AUTH_EMAIL, SET_AUTH_USER } from './action'
import Auth from 'services/Auth'

const user = Auth.user()

const initialState = {
  isLoading: false,
  user_id: user?.id,
  email: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_USER:
      return {
        ...state,
        user_id: payload.id,
      }

    case SET_AUTH_EMAIL:
      return {
        ...state,
        email: payload,
      }

    case LOGOUT_USER:
      return {
        ...state,
        user_id: null,
      }

    default:
      return state
  }
}

export default authReducer
