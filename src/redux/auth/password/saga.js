import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'
import Auth from 'services/Auth'

import { RESET_PASSWORD_FULFILLED, UPDATE_PASSWORD_FULFILLED } from './action'

function* setAuthUser({ payload: { token } }) {
  const user = Auth.user(token)

  yield put(actions.users.set(user))
  yield put(actions.auth.set(user))
}

export default function* saga() {
  yield all([
    takeEvery(RESET_PASSWORD_FULFILLED, setAuthUser),
    takeEvery(UPDATE_PASSWORD_FULFILLED, setAuthUser)
  ])
}
