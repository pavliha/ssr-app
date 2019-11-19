import { createSelector } from 'reselect/lib/index'

const all = (places, entertainments) =>
  places.map(place => ({
    ...place,
    entertainment: entertainments[place.entertainment_id],
  }))

export default createSelector(
  state => Object.values(state.places.entities),
  state => state.entertainments.entities,
  all,
)
