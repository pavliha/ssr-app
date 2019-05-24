import { all, takeEvery, put } from 'redux-saga/effects'
import { CREATE_PLACE_FULFILLED, LOAD_PLACE_FULFILLED, UPDATE_PLACE_FULFILLED } from './action'
import actions from 'src/redux/action'

function* setPlace({ payload: place }) {
  yield put(actions.places.set(place))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_PLACE_FULFILLED, setPlace),
    takeEvery(CREATE_PLACE_FULFILLED, setPlace),
    takeEvery(UPDATE_PLACE_FULFILLED, setPlace)
  ])
}
