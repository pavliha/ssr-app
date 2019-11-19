import { createSelector } from 'reselect/lib/index'

const all = (contacts) =>
  contacts.map(contact => ({
    ...contact,
  }))

export default createSelector(
  state => Object.values(state.places.contacts.entities),
  all,
)
