import { createSelector } from 'reselect'
import assembleRooms from 'src/redux/rooms/selectors/assembleRooms'

const assembleInvites = (invites, rooms) => {
  return invites.map(invite => ({
    ...invite,
    room: rooms.find(room => room.id === invite.room_id)
  }))
}

export default createSelector(
  state => Object.values(state.invites.entities),
  state => assembleRooms(state),
  assembleInvites,
)
