import auth from 'api/Auth'
import user from './user/action'
import password from './password/action'

export const ACTIVATE_USER = 'ACTIVATE_USER'
export const ACTIVATE_USER_FULFILLED = 'ACTIVATE_USER_FULFILLED'

export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_FULFILLED = 'REGISTER_USER_FULFILLED'

export const LOGIN_GOOGLE_USER = 'LOGIN_GOOGLE_USER'
export const LOGIN_GOOGLE_USER_FULFILLED = 'LOGIN_GOOGLE_USER_FULFILLED'

export const LOGIN_FACEBOOK_USER = 'LOGIN_FACEBOOK_USER'
export const LOGIN_FACEBOOK_USER_FULFILLED = 'LOGIN_FACEBOOK_USER_FULFILLED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_FULFILLED = 'LOGIN_USER_FULFILLED'

export const LOGOUT_USER = 'LOGOUT_USER'

export const SET_AUTH_USER = 'SET_AUTH_USER'
export const SET_AUTH_EMAIL = 'SET_AUTH_EMAIL'

/**
 * Async actions. Making API requests
 */

const register = form => ({
  type: REGISTER_USER,
  payload: auth.register(form),
})

const login = form => ({
  type: LOGIN_USER,
  payload: auth.login(form),
})

const activate = hash => ({
  type: ACTIVATE_USER,
  payload: auth.activate(hash),
})

const google = Guser => ({
  type: LOGIN_GOOGLE_USER,
  payload: auth.google(Guser),
})

const facebook = FBUser => ({
  type: LOGIN_FACEBOOK_USER,
  payload: auth.facebook(FBUser),
})

const logout = () => ({
  type: LOGOUT_USER,
  payload: auth.logout()
})

/**
 * Sync actions. Updating store
 */

const set = (user) => ({
  type: SET_AUTH_USER,
  payload: user,
})

const email = (email) => ({
  type: SET_AUTH_EMAIL,
  payload: email,
})

export default {
  user,
  password,
  register,
  login,
  activate,
  google,
  facebook,
  set,
  email,
  logout,
}
