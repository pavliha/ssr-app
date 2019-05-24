import { all, takeEvery, put, fork } from 'redux-saga/effects'
import { LOAD_AUTH_USER_FULFILLED, UPDATE_AUTH_USER_FULFILLED } from './action'
import actions from 'src/redux/action'
import Auth from 'services/Auth'
import account from './account/saga'

function* setUser({ payload: { token } }) {

  const user = Auth.user(token)

  yield put(actions.users.set(user))
}

export default function* saga() {
  yield all([
    fork(account),
    takeEvery(LOAD_AUTH_USER_FULFILLED, setUser),
    takeEvery(UPDATE_AUTH_USER_FULFILLED, setUser)
  ])
}
