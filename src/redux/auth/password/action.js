import auth from 'api/Auth'

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'

export const RESET_PASSWORD = 'RESET_PASSWORD'
export const RESET_PASSWORD_FULFILLED = 'RESET_PASSWORD_FULFILLED'

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_PASSWORD_FULFILLED = 'UPDATE_PASSWORD_FULFILLED'

/**
 * Async actions. Making API requests
 */

const forgot = form => ({
  type: FORGOT_PASSWORD,
  payload: auth.password.forgot(form),
  meta: form,
})

const reset = form => ({
  type: RESET_PASSWORD,
  payload: auth.password.reset(form),
})

const update = form => ({
  type: UPDATE_PASSWORD,
  payload: auth.password.update(form),
})

export default {
  forgot,
  reset,
  update,
}
