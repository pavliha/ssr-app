import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import {
  LOAD_ROOM_MESSAGES_FULFILLED,
  CREATE_ROOM_MESSAGE_PENDING,
  CREATE_ROOM_MESSAGE_FULFILLED,
  RECEIVE_ROOM_MESSAGE, READ_ROOM_MESSAGES_FULFILLED,
} from './action'

/*
 *  Remove nested asset and place from message
 */
const createMessage = (m) => ({
  ...m,
  asset: undefined,
  place: undefined,
})

/*
 *  Create message from ChatForm
 */
const createTempMessage = (room_id, form) => ({
  id: form.token,
  text: form.text,
  user_id: form.user_id,
  asset_id: null,
  place_id: null,
  room_id: room_id,
  isLoading: true,
  updated_at: moment().format('YYYY-MM-DD HH:mm:ss'),
  created_at: moment().format('YYYY-MM-DD HH:mm:ss')
})

/*
 *  Remove temporary message and replace it with normal one from server
 */
function* setMessage({ payload }) {
  const { asset, place } = payload
  const message = createMessage(payload)

  if (asset) yield put(actions.assets.set(asset))
  if (place) yield put(actions.places.set(place))

  yield put(actions.messages.remove(message.token))
  yield put(actions.messages.set(message))
}

/*
 *  Set temporary message until we get response from server
 */
function* setTempMessage({ meta: { room_id, form } }) {
  const tempMessage = createTempMessage(room_id, form)

  yield put(actions.messages.set(tempMessage))
}

/*
 *  Get paginated messages and retrieve
 *  nested place and asset from them to it's own entities
 */
function* addMessages({ payload: { data, total, page } }) {
  const messages = data.map(createMessage)
  const assets = data.map(m => m.asset).filter(a => !!a)
  const places = data.map(m => m.place).filter(p => !!p)

  yield put(actions.messages.setMany(messages))
  if (!isEmpty(assets)) yield put(actions.assets.setMany(assets))
  if (!isEmpty(places)) yield put(actions.places.setMany(places))
  yield put(actions.rooms.status({ messages: { page, total } }))
}

/*
 *  Read all messages for current room
 */
function* readMessages({ meta: { room_id } }) {
  yield put(actions.messages.read(room_id))
}

/*
 *  Listen to all API and Websocket actions
 */
export default function* saga() {
  yield all([
    takeEvery(LOAD_ROOM_MESSAGES_FULFILLED, addMessages),
    takeEvery(READ_ROOM_MESSAGES_FULFILLED, readMessages),
    takeEvery(CREATE_ROOM_MESSAGE_PENDING, setTempMessage),
    takeEvery(CREATE_ROOM_MESSAGE_FULFILLED, setMessage),
    takeEvery(RECEIVE_ROOM_MESSAGE, setMessage)
  ])
}
