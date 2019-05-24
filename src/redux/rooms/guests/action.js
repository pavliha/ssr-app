import room from 'api/Room'

export const RECEIVE_ROOM_GUEST_JOINED = 'RECEIVE_ROOM_GUEST_JOINED'
export const RECEIVE_ROOM_GUEST_LEFT = 'RECEIVE_ROOM_GUEST_LEFT'

export const LOAD_ROOM_GUESTS = 'LOAD_ROOM_GUESTS'
export const LOAD_ROOM_GUESTS_FULFILLED = 'LOAD_ROOM_GUESTS_FULFILLED'

export const KICK_ROOM_GUEST = 'KICK_ROOM_GUEST'
export const KICK_ROOM_GUEST_FULFILLED = 'KICK_ROOM_GUEST_FULFILLED'

export const SET_ROOM_GUESTS = 'SET_ROOM_GUESTS'
export const SET_ROOM_GUEST = 'SET_ROOM_GUEST'
export const REMOVE_ROOM_GUEST = 'REMOVE_ROOM_GUEST'

/**
 * Websocket actions. Catching socket events
 */

const joined = (room_id, guest) => ({
  type: RECEIVE_ROOM_GUEST_JOINED,
  payload: guest,
  meta: { room_id }
})

const left = (room_id, guest) => ({
  type: RECEIVE_ROOM_GUEST_LEFT,
  payload: guest,
  meta: { room_id }
})

/**
 * Async actions. Making API requests
 */

const list = (room_id) => ({
  type: LOAD_ROOM_GUESTS,
  payload: room.guests.list(room_id),
  meta: { room_id }
})

const kick = (room_id, user_id) => ({
  type: KICK_ROOM_GUEST,
  payload: room.guests.kick(room_id, user_id),
  meta: { room_id, user_id }
})

/**
 * Sync actions. Updating rooms entity
 */

const setMany = (room_id, guests_ids) => ({
  type: SET_ROOM_GUESTS,
  payload: guests_ids,
  meta: { room_id }
})

const set = (room_id, guest_id) => ({
  type: SET_ROOM_GUEST,
  payload: guest_id,
  meta: { room_id }
})

const remove = (room_id, guest_id) => ({
  type: REMOVE_ROOM_GUEST,
  payload: guest_id,
  meta: { room_id }
})

export default {
  joined,
  left,
  list,
  kick,
  set,
  setMany,
  remove,
}
