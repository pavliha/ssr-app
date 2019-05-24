import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_INVITE_BY_TOKEN_FULFILLED,
} from './action'

function* setInviteFromToken({ payload: invite }) {
  yield put(actions.invites.current(invite.id))
  yield put(actions.invites.set(invite))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_INVITE_BY_TOKEN_FULFILLED, setInviteFromToken),
  ])
}
