import actions from 'src/redux/action'
import { all, put, takeEvery } from 'redux-saga/effects'

import {
  LOAD_ASSETS_FULFILLED,
  LOAD_ASSET_FULFILLED,
  CREATE_ASSET_FULFILLED,
  DESTROY_ASSET_FULFILLED,
} from './action'

function* setAsset({ payload: asset }) {
  yield put(actions.assets.set(asset))
}

function* setAssets({ payload: { data: assets } }) {
  yield put(actions.assets.setMany(assets))
}

function* removeAsset({ meta: { asset_id } }) {
  yield put(actions.assets.remove(asset_id))
}

export default function* saga() {
  yield all([
    takeEvery(LOAD_ASSETS_FULFILLED, setAssets),
    takeEvery(LOAD_ASSET_FULFILLED, setAsset),
    takeEvery(CREATE_ASSET_FULFILLED, setAsset),
    takeEvery(DESTROY_ASSET_FULFILLED, removeAsset),
  ])
}
