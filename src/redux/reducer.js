import { combineReducers } from 'redux'
import places from './places/reducer'
import assets from './assets/reducers'
import entertainments from './entertainments/reducer'

export default combineReducers({
  places,
  assets,
  entertainments,
})
