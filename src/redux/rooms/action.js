import room from 'api/Room'
import guests from './guests/action'
import invite from './invite/action'
import messages from './messages/action'

export const LOAD_ROOMS = 'LOAD_ROOMS'
export const LOAD_ROOMS_FULFILLED = 'LOAD_ROOMS_FULFILLED'

export const LOAD_ROOM = 'LOAD_ROOM'
export const LOAD_ROOM_FULFILLED = 'LOAD_ROOM_FULFILLED'

export const CREATE_ROOM = 'CREATE_ROOM'
export const CREATE_ROOM_FULFILLED = 'CREATE_ROOM_FULFILLED'

export const UPDATE_ROOM = 'UPDATE_ROOM'
export const UPDATE_ROOM_FULFILLED = 'UPDATE_ROOM_FULFILLED'

export const LEAVE_ROOM = 'LEAVE_ROOM'
export const LEAVE_ROOM_FULFILLED = 'LEAVE_ROOM_FULFILLED'

export const SET_ROOM = 'SET_ROOM'
export const SET_ROOMS = 'SET_ROOMS'
export const REMOVE_ROOM = 'REMOVE_ROOM'
export const SELECT_ROOM = 'SELECT_ROOM'

export const SET_ROOM_STATUS = 'SET_ROOM_STATUS'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_ROOMS,
  payload: room.list()
})

const find = (id) => ({
  type: LOAD_ROOM,
  payload: room.find(id)
})

const create = (form) => ({
  type: CREATE_ROOM,
  payload: room.create(form)
})

const update = (id, form) => ({
  type: UPDATE_ROOM,
  payload: room.update(id, form)
})

const leave = (room_id) => ({
  type: LEAVE_ROOM,
  payload: room.leave(room_id),
  meta: { room_id }
})

/**
 * Sync actions. Updating model
 */

const setMany = rooms => ({
  type: SET_ROOMS,
  payload: rooms,
})

const set = room => ({
  type: SET_ROOM,
  payload: room,
})

const select = room_id => ({
  type: SELECT_ROOM,
  payload: room_id,
})

const remove = room_id => ({
  type: REMOVE_ROOM,
  payload: room_id,
})

/**
 * Sync actions. room status
 */

const status = (params) => ({
  type: SET_ROOM_STATUS,
  payload: params,
})

export default {
  list,
  create,
  update,
  find,
  set,
  select,
  setMany,
  leave,
  remove,
  guests,
  messages,
  invite,
  status,
}
