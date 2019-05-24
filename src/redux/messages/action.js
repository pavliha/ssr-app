export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_MESSAGES = 'SET_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const READ_MESSAGES = 'READ_MESSAGES'
/**
 * Sync actions. Updating store
 */

const setMany = messages => ({
  type: SET_MESSAGES,
  payload: messages,
})

const set = message => ({
  type: SET_MESSAGE,
  payload: message,
})

const remove = message_id => ({
  type: REMOVE_MESSAGE,
  payload: message_id,
})

const read = room_id => ({
  type: READ_MESSAGES,
  payload: room_id,
})

export default {
  set,
  setMany,
  remove,
  read,
}
