import auth from 'api/Auth'

export const LOAD_AUTH_USER_ACCOUNT = 'LOAD_AUTH_USER_ACCOUNT'
export const LOAD_AUTH_USER_ACCOUNT_FULFILLED = 'LOAD_AUTH_USER_ACCOUNT_FULFILLED'

export const UPDATE_AUTH_USER_ACCOUNT = 'UPDATE_AUTH_USER_ACCOUNT'
export const UPDATE_AUTH_USER_ACCOUNT_FULFILLED = 'UPDATE_AUTH_USER_ACCOUNT_FULFILLED'

/**
 * Async actions. Making API requests
 */

const load = (user_id) => ({
  type: LOAD_AUTH_USER_ACCOUNT,
  payload: auth.user.account.load(user_id)
})

const update = (user_id, form) => ({
  type: UPDATE_AUTH_USER_ACCOUNT,
  payload: auth.user.account.update(user_id, form)
})

export default {
  load,
  update,
}
