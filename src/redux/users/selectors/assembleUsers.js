import { createSelector } from 'reselect'

const assembleUsers = (users) => {
  return Object.values(users)
}

export default createSelector(
  state => state.users.entities,
  assembleUsers,
)
