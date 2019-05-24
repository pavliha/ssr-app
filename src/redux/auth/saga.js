import actions from 'src/redux/action'
import { all, put, takeEvery, fork } from 'redux-saga/effects'
import Auth from 'services/Auth'
import user from './user/saga'
import password from './password/saga'

import {
  ACTIVATE_USER_FULFILLED,
  LOGIN_FACEBOOK_USER_FULFILLED,
  LOGIN_GOOGLE_USER_FULFILLED,
  LOGIN_USER_FULFILLED,
  REGISTER_USER_FULFILLED,
} from './action'

function* setAuthUser({ payload: { token } }) {
  const user = Auth.user(token)

  yield put(actions.users.set(user))
  yield put(actions.auth.set(user))
}

export default function* saga() {
  yield all([
    fork(user),
    fork(password),
    takeEvery(LOGIN_USER_FULFILLED, setAuthUser),
    takeEvery(REGISTER_USER_FULFILLED, setAuthUser),
    takeEvery(LOGIN_GOOGLE_USER_FULFILLED, setAuthUser),
    takeEvery(LOGIN_FACEBOOK_USER_FULFILLED, setAuthUser),
    takeEvery(ACTIVATE_USER_FULFILLED, setAuthUser,),
  ])
}
