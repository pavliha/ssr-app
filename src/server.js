import React from 'react'
import Html from './index'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

export default () => async (request, response) => {
  response.send(renderToStaticMarkup(
    <Html
      isSsr={process.env.NODE_ENV === 'production'}
      root={<App />}
    />))
}
