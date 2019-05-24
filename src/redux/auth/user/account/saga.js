import { all, takeEvery, put } from 'redux-saga/effects'
import {
  LOAD_AUTH_USER_ACCOUNT_FULFILLED,
  UPDATE_AUTH_USER_ACCOUNT_FULFILLED
} from './action'
import actions from 'src/redux/action'

function* updateAccount({ payload }) {
  yield put(actions.accounts.set(payload))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_AUTH_USER_ACCOUNT_FULFILLED, updateAccount),
    takeEvery(UPDATE_AUTH_USER_ACCOUNT_FULFILLED, updateAccount)
  ])
}
