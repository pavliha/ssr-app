import React from 'react'
import html from './index'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { ChunkExtractorManager } from '@loadable/server'
import path from 'path'
import Loadable from '../lib/Loadable'

const ServerApp = ({ location, extractor, children }) => {
  const context = {}

  return (
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter context={context} location={location}>
        {children}
      </StaticRouter>
    </ChunkExtractorManager>
  )
}

export default () => async (request, response) => {
  const isSsr = process.env.NODE_ENV === 'production'
  const statsFile = path.resolve('./dist/public/loadable-stats.json')
  const { extractor, scripts, styles } = new Loadable({ isSsr, statsFile })

  const component = (
    <ServerApp extractor={extractor} location={request.url}>
      <App />
    </ServerApp>
  )

  response.send(html({ component, styles, scripts, isSsr }))
}
