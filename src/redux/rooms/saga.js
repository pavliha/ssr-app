import { all, put, takeEvery, fork } from 'redux-saga/effects'
import actions from 'src/redux/action'
import guests from './guests/saga'
import invite from './invite/saga'
import messages from './messages/saga'

import {
  LOAD_ROOMS_FULFILLED,
  LOAD_ROOM_FULFILLED,
  CREATE_ROOM_FULFILLED,
  LEAVE_ROOM_FULFILLED,
  UPDATE_ROOM_FULFILLED,
} from './action'

const createRoom = room => ({
  ...room,
  guests_ids: [],
  invite: undefined,
  place: undefined,
})

function* setRoom({ payload: room }) {
  yield put(actions.rooms.select(room.id))
  if (room.invite) yield put(actions.invites.set(room.invite))
  if (room.place) yield put(actions.places.set(room.place))
  yield put(actions.rooms.set(createRoom(room)))
}

function* setRooms({ payload: { data: rooms } }) {
  const invites = rooms.map(r => r.invite).filter(i => !!i)
  const places = rooms.map(r => r.place).filter(i => !!i)

  if (invites.length) yield put(actions.invites.setMany(invites))
  if (places.length) yield put(actions.places.setMany(places))
  yield put(actions.rooms.setMany(rooms.map(createRoom)))
}

function* removeRoom({ meta: { room_id } }) {
  yield put(actions.rooms.remove(room_id))
}

export default function* saga() {
  yield all([
    fork(guests),
    fork(invite),
    fork(messages),
    takeEvery(LOAD_ROOMS_FULFILLED, setRooms),
    takeEvery(LOAD_ROOM_FULFILLED, setRoom),
    takeEvery(CREATE_ROOM_FULFILLED, setRoom),
    takeEvery(UPDATE_ROOM_FULFILLED, setRoom),
    takeEvery(LEAVE_ROOM_FULFILLED, removeRoom),
  ])
}
