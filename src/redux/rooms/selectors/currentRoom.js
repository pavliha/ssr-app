import { createSelector } from 'reselect'
import assembleMessages from 'src/redux/messages/selectors/assembleMessages'
import assembleInvites from 'src/redux/invites/selectors/assembleInvites'
import isMeAdmin from 'src/redux/rooms/selectors/isMeAdmin'

const currentRoom = (
  rooms,
  messages,
  users,
  places,
  room_id,
  totalMessages,
  invites,
  isMeAdmin) => {

  const room = rooms[room_id]

  if (!room) return null

  return {
    ...room,
    admin: users[room.admin_id],
    messages: messages.filter(m => m.room_id === room.id),
    guests: room.guests_ids.map(id => users[id]),
    place: places[room.place_id],
    invite: invites.find(invite => invite.room_id === room.id),
    totalMessages,
    isMeAdmin,
  }
}

export default createSelector(
  state => state.rooms.entities,
  state => assembleMessages(state),
  state => state.users.entities,
  state => state.places.entities,
  state => state.rooms.status.room_id,
  state => state.rooms.status.messages.total,
  state => assembleInvites(state),
  state => isMeAdmin(state),
  currentRoom,
)
