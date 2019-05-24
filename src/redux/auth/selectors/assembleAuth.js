import { createSelector } from 'reselect'

const assembleAuth = (auth, users) => {
  return {
    ...auth,
    user: users[auth.user_id],
  }
}

export default createSelector(
  state => state.auth,
  state => state.users.entities,
  assembleAuth,
)
