import auth from 'api/Auth'
import account from './account/action'

export const LOAD_AUTH_USER = 'LOAD_AUTH_USER'
export const LOAD_AUTH_USER_FULFILLED = 'LOAD_AUTH_USER_FULFILLED'

export const UPDATE_AUTH_USER = 'UPDATE_AUTH_USER'
export const UPDATE_AUTH_USER_FULFILLED = 'UPDATE_AUTH_USER_FULFILLED'

/**
 * Async actions. Making API requests
 */

const load = (user_id) => ({
  type: LOAD_AUTH_USER,
  payload: auth.user.load(user_id)
})

const update = (user_id, form) => ({
  type: UPDATE_AUTH_USER,
  payload: auth.user.update(user_id, form)
})

export default {
  account,
  load,
  update,
}
