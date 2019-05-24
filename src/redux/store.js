import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'src/redux/saga'
import reducers from 'src/redux/reducer'

const isClient = typeof window !== 'undefined'

let initialState = {}
if (isClient) {
  initialState = window.__STATE__
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      promise,
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)

if (!isClient) {
  global.store = store
}

if (isClient) {
  window.store = store
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextRootReducer = reducers
    store.replaceReducer(nextRootReducer)
  })
}
store.runSaga = sagaMiddleware.run

export default store
