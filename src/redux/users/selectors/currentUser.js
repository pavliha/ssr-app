import { createSelector } from 'reselect'

const currentUser = (users, user_id, accounts) => {
  if (!user_id) return null

  return {
    ...users[user_id],
    account: accounts.find(a => a.user_id),
  }
}

export default createSelector(
  state => state.users.entities,
  state => state.auth.user_id,
  state => Object.values(state.accounts.entities),

  currentUser,
)
