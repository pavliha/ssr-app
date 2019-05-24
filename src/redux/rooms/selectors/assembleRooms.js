import { createSelector } from 'reselect'

const assembleRooms = (rooms, places, invites) =>
  rooms
    .map(room => ({
      ...room,
      place: places[room.place_id],
      invite: invites.find(invite => invite.room_id === room.id)
    }))
    .sort((prev, next) => {
      return next.updated_at - prev.updated_at
    })
    .reverse()

export default createSelector(
  state => Object.values(state.rooms.entities),
  state => state.places.entities,
  state => Object.values(state.invites.entities),
  assembleRooms,
)
