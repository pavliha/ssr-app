import { createSelector } from 'reselect'

const isSomeoneOnline = (rooms, room_id, users) => {

  const room = rooms[room_id]

  return room.guests_ids
    .map(id => users[id])
    .find(u => Boolean(u.pivot?.is_online))
}

export default createSelector(
  state => state.rooms.entities,
  state => state.rooms.status.room_id,
  state => state.users.entities,
  isSomeoneOnline
)
