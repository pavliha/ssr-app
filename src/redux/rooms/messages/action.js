import room from 'api/Room'

export const LOAD_ROOM_MESSAGES = 'LOAD_ROOM_MESSAGES'
export const LOAD_ROOM_MESSAGES_FULFILLED = 'LOAD_ROOM_MESSAGES_FULFILLED'

export const CREATE_ROOM_MESSAGE = 'CREATE_ROOM_MESSAGE'
export const CREATE_ROOM_MESSAGE_PENDING = 'CREATE_ROOM_MESSAGE_PENDING'
export const CREATE_ROOM_MESSAGE_FULFILLED = 'CREATE_ROOM_MESSAGE_FULFILLED'

export const READ_ROOM_MESSAGES = 'READ_ROOM_MESSAGES'
export const READ_ROOM_MESSAGES_PENDING = 'READ_ROOM_MESSAGES_PENDING'
export const READ_ROOM_MESSAGES_FULFILLED = 'READ_ROOM_MESSAGES_FULFILLED'

export const RECEIVE_ROOM_MESSAGE = 'RECEIVE_ROOM_MESSAGE'

/**
 * Websocket actions. Receive data
 */

const receive = (message) => ({
  type: RECEIVE_ROOM_MESSAGE,
  payload: message,
})

/**
 * Async actions. Making API requests
 */

const list = (room_id, params) => ({
  type: LOAD_ROOM_MESSAGES,
  payload: room.messages.list(room_id, params)
})

const create = (room_id, form) => ({
  type: CREATE_ROOM_MESSAGE,
  payload: room.messages.create(room_id, form),
  meta: { room_id, form }
})

const read = (room_id) => ({
  type: READ_ROOM_MESSAGES,
  payload: room.messages.read(room_id),
  meta: { room_id }
})

export default {
  list,
  create,
  read,
  receive,
}
