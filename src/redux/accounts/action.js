export const SET_ACCOUNT = 'SET_ACCOUNT'
export const SET_ACCOUNTS = 'SET_ACCOUNTS'
export const REMOVE_ACCOUNT = 'REMOVE_ACCOUNT'

/**
 * Sync actions. Updating store
 */

const setMany = accounts => ({
  type: SET_ACCOUNTS,
  payload: accounts,
})

const set = account => ({
  type: SET_ACCOUNT,
  payload: account,
})

const remove = account_id => ({
  type: REMOVE_ACCOUNT,
  payload: account_id,
})

export default {
  set,
  setMany,
  remove,
}
