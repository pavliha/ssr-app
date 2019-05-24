import invite from 'api/Invite'

export const LOAD_INVITE_BY_TOKEN = 'LOAD_INVITE_BY_TOKEN'
export const LOAD_INVITE_BY_TOKEN_FULFILLED = 'LOAD_INVITE_BY_TOKEN_FULFILLED'

export const ACCEPT_INVITE = 'ACCEPT_INVITE'

export const SET_INVITE = 'SET_INVITE'
export const SET_INVITES = 'SET_INVITES'
export const REMOVE_INVITE = 'REMOVE_INVITE'
export const SET_CURRENT_INVITE = 'SET_CURRENT_INVITE'

/**
 * Async actions. Making API requests
 */

const loadByToken = (token) => ({
  type: LOAD_INVITE_BY_TOKEN,
  payload: invite.fromToken(token),
  meta: { token }
})

const accept = (user_id, token) => ({
  type: ACCEPT_INVITE,
  payload: invite.accept(user_id, token),
  meta: { user_id, token }
})


/**
 * Sync actions. Updating store
 */

const set = invite => ({
  type: SET_INVITE,
  payload: invite,
})

const setMany = invites => ({
  type: SET_INVITES,
  payload: invites,
})

const remove = room_id => ({
  type: REMOVE_INVITE,
  payload: room_id,
})

const current = invite_id => ({
  type: SET_CURRENT_INVITE,
  payload: invite_id,
})

export default {
  loadByToken,
  accept,
  set,
  setMany,
  remove,
  current
}
