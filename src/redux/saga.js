import { all, fork } from 'redux-saga/effects'
import places from './places/saga'
import assets from './assets/saga'
import entertainments from './entertainments/saga'

export default function* rootSaga() {
  yield all([
    fork(places),
    fork(assets),
    fork(entertainments),
  ])
}
