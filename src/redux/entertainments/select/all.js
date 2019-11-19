import { createSelector } from 'reselect'

const all = (entertainments, places) => entertainments
  .map(e => ({
    ...e,
    places: places.filter(p => p.entertainment_id === e.id).slice(0, 6)
  }))
  .sort((prev, next) => prev.order - next.order)

export default createSelector(
  state => Object.values(state.entertainments.entities),
  state => Object.values(state.places.entities),
  all
)
