import React from 'react'
import Html from './index'
import { renderToStaticMarkup } from 'react-dom/server'
import App from './containers/Layout'

export default () => async (request, response) => {
  response.send(renderToStaticMarkup(
    <Html
      isSsr={!module.hot}
      root={<App />}
    />))
}
