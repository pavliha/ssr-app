import { combineReducers } from 'redux'
import entities from './entities'
import photos from '../photos/reducer'
import contacts from '../contacts/reducer'

export default combineReducers({
  photos,
  contacts,
  entities,
})
