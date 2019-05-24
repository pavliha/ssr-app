import { SET_MESSAGE, SET_MESSAGES, REMOVE_MESSAGE, READ_MESSAGES } from '../action'
import arrayToObject from 'utils/arrayToObject'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return {
        ...state,
        ...arrayToObject(payload)
      }

    case SET_MESSAGE:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          room_id: Number(payload.room_id)
        },
      }

    case REMOVE_MESSAGE: {
      const messages = { ...state }
      delete messages[payload]

      return messages
    }

    case READ_MESSAGES: {
      const messages = Object.values({ ...state })

      const readMessages = messages
        .filter(message => message.room_id === Number(payload))
        .map(message => ({ ...message, is_read: true }))

      return {
        ...state,
        ...arrayToObject(readMessages)
      }
    }

    default:
      return state
  }
}
