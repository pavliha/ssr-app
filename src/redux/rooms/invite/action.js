import room from 'api/Room'

export const LOAD_ROOM_INVITE = 'LOAD_ROOM_INVITE'
export const LOAD_ROOM_INVITE_FULFILLED = 'LOAD_ROOM_INVITE_FULFILLED'

export const CREATE_ROOM_INVITE = 'CREATE_ROOM_INVITE'
export const CREATE_ROOM_INVITE_FULFILLED = 'CREATE_ROOM_INVITE_FULFILLED'

export const UPDATE_ROOM_INVITE = 'UPDATE_ROOM_INVITE'
export const UPDATE_ROOM_INVITE_FULFILLED = 'UPDATE_ROOM_INVITE_FULFILLED'

export const DESTROY_ROOM_INVITE = 'DESTROY_ROOM_INVITE'
export const DESTROY_ROOM_INVITE_FULFILLED = 'DESTROY_ROOM_INVITE_FULFILLED'

/**
 * Async actions. Making API requests
 */

const load = (room_id) => ({
  type: LOAD_ROOM_INVITE,
  payload: room.invite.find(room_id),
  meta: { room_id }
})

const create = (room_id, form) => ({
  type: CREATE_ROOM_INVITE,
  payload: room.invite.create(room_id, form),
  meta: { room_id }
})

const update = (room_id, form) => ({
  type: UPDATE_ROOM_INVITE,
  payload: room.invite.update(room_id, form),
  meta: { room_id }
})

const destroy = (room_id) => ({
  type: DESTROY_ROOM_INVITE,
  payload: room.invite.destroy(room_id),
  meta: { room_id }
})

export default {
  load,
  create,
  update,
  destroy,
}
