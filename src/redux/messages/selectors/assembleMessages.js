import { createSelector } from 'reselect'
import sortBy from 'lodash/sortBy'

const assembleMessages = (messages, assets, users, places, auth, rooms) => {
  return sortBy(
    Object.values(messages).map(message => ({
      ...message,
      asset: assets[message.asset_id],
      user: users[message.user_id],
      place: places[message.place_id],
      room: rooms[message.room_id],
      isMine: message.user_id === auth.user_id,
    })),
    'created_at'
  )
}

export default createSelector(
  state => state.messages.entities,
  state => state.assets.entities,
  state => state.users.entities,
  state => state.places.entities,
  state => state.auth,
  state => state.rooms.entities,
  assembleMessages
)
