import { createSelector } from 'reselect/lib/index'

const assemblePlaces = (places) => {
  return places
}

export default createSelector(
  state => state.places.entities,
  assemblePlaces,
)
