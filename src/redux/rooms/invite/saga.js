import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_ROOM_INVITE_FULFILLED,
  DESTROY_ROOM_INVITE_FULFILLED,
  UPDATE_ROOM_INVITE_FULFILLED,
  CREATE_ROOM_INVITE_FULFILLED,
} from './action'

function* setInvite({ payload: invite }) {
  if (!invite) return null
  yield put(actions.invites.set(invite))
}

function* removeInvite({ meta: { invite_id } }) {
  yield put(actions.invites.remove(invite_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_ROOM_INVITE_FULFILLED, setInvite),
    takeEvery(CREATE_ROOM_INVITE_FULFILLED, setInvite),
    takeEvery(UPDATE_ROOM_INVITE_FULFILLED, setInvite),
    takeEvery(DESTROY_ROOM_INVITE_FULFILLED, removeInvite),
  ])
}
