import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { loadableReady } from '@loadable/component'
import App from './App'

const Client = () =>
  <BrowserRouter>
    <App />
  </BrowserRouter>

if (module.hot) {
  render(<Client />, document.getElementById('root'))
} else {
  loadableReady(() => hydrate(<Client />, document.getElementById('root')))
}

if (module.hot) module.hot.accept()
