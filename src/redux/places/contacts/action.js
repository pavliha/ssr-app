export const SET_CONTACTS = 'SET_CONTACTS'

/**
 * Sync actions. Updating store
 */

const setMany = contacts => ({
  type: SET_CONTACTS,
  payload: contacts,
})

export default {
  setMany,
}
