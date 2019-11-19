import { createSelector } from 'reselect'
import { select } from 'src/redux'

const current = entertainment_id => (entertainments, places) => {

  const entertainment = entertainments[entertainment_id]

  if (!entertainment) return null

  return {
    ...entertainment,
    places: places.filter(p => p.entertainment_id === entertainment_id),
  }
}

export default (state, entertainment_id) =>
  createSelector(
    state => state.entertainments.entities,
    state => select.places.all(state),
    current(parseInt(entertainment_id)),
  )(state)
