import place from 'api/place'
import photos from './photos/action'
import contacts from './contacts/action'

export const LOAD_PLACE = 'LOAD_PLACE'
export const LOAD_PLACE_FULFILLED = 'LOAD_PLACE_FULFILLED'

export const SET_PLACE = 'SET_PLACE'
export const SET_PLACES = 'SET_PLACES'
export const REMOVE_PLACE = 'REMOVE_PLACE'

/**
 * Async actions. Making API requests
 */

const load = place_id => ({
  type: LOAD_PLACE,
  payload: place.load(place_id)
})

/**
 * Sync actions. Updating store
 */

const setMany = places => ({
  type: SET_PLACES,
  payload: places,
})

const set = place => ({
  type: SET_PLACE,
  payload: place,
})

const remove = place_id => ({
  type: REMOVE_PLACE,
  payload: place_id,
})

export default {
  contacts,
  photos,
  load,
  set,
  setMany,
  remove,
}
