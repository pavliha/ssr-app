import uniq from 'lodash/uniq'
import arrayToObject from 'utils/arrayToObject'
import isEmpty from 'lodash/isEmpty'
import { SET_ROOM, SET_ROOMS, REMOVE_ROOM } from '../action'
import { SET_ROOM_GUESTS, REMOVE_ROOM_GUEST, SET_ROOM_GUEST } from '../guests/action'

export default (state = {}, { type, payload, meta }) => {
  switch (type) {

    case SET_ROOMS:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_ROOM:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          guests_ids: isEmpty(payload?.guests_ids)
            ? state[payload.id]?.guests_ids || []
            : payload.guests_ids,
        },
      }

    case REMOVE_ROOM: {
      const rooms = { ...state }
      delete rooms[payload]

      return rooms
    }

    case SET_ROOM_GUEST: {
      const room = state[meta.room_id]

      if (!room) return state

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: uniq([...room.guests_ids, payload])
        },
      }
    }

    case SET_ROOM_GUESTS: {
      const room = state[meta.room_id]

      if (!room) return state

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: uniq([...room.guests_ids, ...payload])
        },
      }
    }

    case REMOVE_ROOM_GUEST: {
      const room = state[meta.room_id]

      return {
        ...state,
        [room.id]: {
          ...room,
          guests_ids: room.guests_ids.filter(id => id !== payload)
        },
      }
    }

    default:
      return state
  }
}
