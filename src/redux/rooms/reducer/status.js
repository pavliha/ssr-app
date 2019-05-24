import { SELECT_ROOM, SET_ROOM_STATUS } from '../action'

const initialState = {
  room_id: null,
  messages: {
    page: 1,
    total: 0,
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SELECT_ROOM:
      return {
        ...state,
        room_id: payload,
      }

    case SET_ROOM_STATUS: {
      return {
        ...state,
        messages: payload.messages || state.messages,
      }
    }

    default:
      return state
  }
}
