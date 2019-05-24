import auth from 'api/Auth'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const REMOVE_USER = 'REMOVE_USER'
export const SET_USER_ONLINE = 'SET_USER_ONLINE'
export const SET_USER_OFFLINE = 'SET_USER_OFFLINE'

export const LOAD_USER = 'LOAD_USER'
export const LOAD_USER_FULFILLED = 'LOAD_USER_FULFILLED'

export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_USER_FULFILLED = 'UPDATE_USER_FULFILLED'

/**
 * Async actions. Making API requests
 */

const load = (user_id) => ({
  type: LOAD_USER,
  payload: auth.user.load(user_id)
})

const update = (user_id, form) => ({
  type: UPDATE_USER,
  payload: auth.user.update(user_id, form)
})

/**
 * Sync actions. Updating store
 */

const setMany = users => ({
  type: SET_USERS,
  payload: users,
})

const set = user => ({
  type: SET_USER,
  payload: user,
})

const remove = user_id => ({
  type: REMOVE_USER,
  payload: user_id,
})

const online = (user_id) => ({
  type: SET_USER_ONLINE,
  payload: user_id,
})

const offline = (user_id) => ({
  type: SET_USER_OFFLINE,
  payload: user_id,
})

export default {
  load,
  update,
  set,
  setMany,
  remove,
  online,
  offline
}
