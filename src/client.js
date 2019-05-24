import React from 'react'
import { render, hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const create = module.hot ? render : hydrate

const Client = () =>
  <BrowserRouter>
    <App />
  </BrowserRouter>

create(<Client />, document.getElementById('root'))

if (module.hot) module.hot.accept()
