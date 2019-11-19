import { all, takeEvery } from 'redux-saga/effects'
import {
  CREATE_ENTERTAINMENT_FULFILLED,
  LOAD_ENTERTAINMENT_FULFILLED,
  UPDATE_ENTERTAINMENT_FULFILLED,
  LOAD_ENTERTAINMENTS_FULFILLED
} from './action'
import actions from 'src/redux/action'
import { normalize, putRelationsToStore } from 'utils/index'

const defineRelationsFrom = (models) => ([
  [models.entertainment, actions.entertainments.setMany],
  [models.places, actions.places.setMany],
])

function * setEntertainments({ payload: entertainments }) {
  const models = normalize(entertainments, 'entertainment')
  const relations = defineRelationsFrom(models)
  yield putRelationsToStore(models, relations)
}

function * setEntertainment({ payload: entertainment }) {
  const models = normalize(entertainment, 'entertainment')
  const relations = defineRelationsFrom(models)
  yield putRelationsToStore(models, relations)
}

export default function * saga() {
  yield all([
    takeEvery(LOAD_ENTERTAINMENTS_FULFILLED, setEntertainments),
    takeEvery(LOAD_ENTERTAINMENT_FULFILLED, setEntertainment),
    takeEvery(CREATE_ENTERTAINMENT_FULFILLED, setEntertainment),
    takeEvery(UPDATE_ENTERTAINMENT_FULFILLED, setEntertainment)
  ])
}
