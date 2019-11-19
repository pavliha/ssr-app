import Asset from 'api/asset'

export const LOAD_ASSETS = 'LOAD_ASSETS'
export const LOAD_ASSETS_FULFILLED = 'LOAD_ASSETS_FULFILLED'

export const LOAD_ASSET = 'LOAD_ASSET'
export const LOAD_ASSET_FULFILLED = 'LOAD_ASSET_FULFILLED'

export const CREATE_ASSET = 'CREATE_ASSET'
export const CREATE_ASSET_FULFILLED = 'CREATE_ASSET_FULFILLED'

export const DESTROY_ASSET = 'DESTROY_ASSET'
export const DESTROY_ASSET_FULFILLED = 'DESTROY_ASSET_FULFILLED'

export const SET_ASSET = 'SET_ASSET'
export const SET_ASSETS = 'SET_ASSETS'
export const REMOVE_ASSET = 'REMOVE_ASSET'
export const SET_CURRENT_ASSET = 'SET_CURRENT_ASSET'

/**
 * Async actions. Making API requests
 */

const list = () => ({
  type: LOAD_ASSETS,
  payload: Asset.loadMany()
})

const find = (asset_id) => ({
  type: LOAD_ASSET,
  payload: Asset.load(asset_id),
  meta: { asset_id }
})

const create = (file) => ({
  type: CREATE_ASSET,
  payload: Asset.create(file),
})

const destroy = (asset_id) => ({
  type: DESTROY_ASSET,
  payload: Asset.destroy(asset_id),
  meta: { asset_id }
})

/**
 * Sync actions. Updating store
 */

const setMany = assets => ({
  type: SET_ASSETS,
  payload: assets,
})

const set = asset => ({
  type: SET_ASSET,
  payload: asset,
})

const remove = asset_id => ({
  type: REMOVE_ASSET,
  payload: asset_id,
})

export default {
  list,
  find,
  create,
  set,
  setMany,
  destroy,
  remove,
}
