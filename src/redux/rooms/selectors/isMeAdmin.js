import { createSelector } from 'reselect'

const isMeAdmin = (auth, rooms, room_id) => {
  const room = rooms[room_id]

  if (!room) return false

  return auth.user_id === room.admin_id
}

export default createSelector(
  state => state.auth,
  state => state.rooms.entities,
  state => state.rooms.status.room_id,
  isMeAdmin
)
