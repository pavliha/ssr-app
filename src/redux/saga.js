import { all, fork } from 'redux-saga/effects'
import auth from './auth/saga'
import users from './users/saga'
import rooms from './rooms/saga'
import assets from './assets/saga'
import messages from './messages/saga'
import places from './places/saga'
import invites from './invites/saga'

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(users),
    fork(rooms),
    fork(users),
    fork(invites),
    fork(assets),
    fork(messages),
    fork(places),
  ])
}
