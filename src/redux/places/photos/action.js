export const SET_PHOTOS = 'SET_PHOTOS'

/**
 * Sync actions. Updating store
 */

const setMany = photos => ({
  type: SET_PHOTOS,
  payload: photos,
})

export default {
  setMany,
}
