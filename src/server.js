import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Template from 'lib/Template'
import App from './App'

const render = async (request, response) => {
  const context = {}
  const jsx = (
    <StaticRouter context={context} location={request.url}>
      <App />
    </StaticRouter>
  )
  const template = new Template(jsx)
  const html = template.render()
  response.send(html)
}

export default () => render
