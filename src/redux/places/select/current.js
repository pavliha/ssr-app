import { createSelector } from 'reselect'

const current = (place_id) => (places, photos, contacts, entertainments) => {
  const place = places[place_id]

  if (!place) return null

  return {
    ...place,
    photos: photos.filter(p => p.place_id === place.id),
    contacts: contacts.find(c => c.place_id === place.id),
    entertainment: entertainments[place.entertainment_id]
  }
}

export default (state, place_id) =>
  createSelector(
    state => state.places.entities,
    state => Object.values(state.places.photos.entities),
    state => Object.values(state.places.contacts.entities),
    state => state.entertainments.entities,
    current(parseInt(place_id)),
  )(state)
