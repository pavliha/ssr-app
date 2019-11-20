import place from 'api/place'
import photos from './photos/action'
import contacts from './contacts/action'
import * as c from './constants'

/**
 * Async actions. Making API requests
 */

const load = place_id => ({
  type: c.LOAD_PLACE,
  payload: place.load(place_id),
})

/**
 * Sync actions. Updating store
 */

const setMany = places => ({
  type: c.SET_PLACES,
  payload: places,
})

const set = place => ({
  type: c.SET_PLACE,
  payload: place,
})

const remove = place_id => ({
  type: c.REMOVE_PLACE,
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
