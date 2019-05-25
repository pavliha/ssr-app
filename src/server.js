import React from 'react'
import html from './index'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { ChunkExtractorManager } from '@loadable/server'
import path from 'path'
import Loadable from '../lib/Loadable'

const ServerApp = ({ location, extractor }) => {
  const context = {}

  return (
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </ChunkExtractorManager>
  )
}

export default () => async (request, response) => {
  const isSsr = process.env.NODE_ENV === 'production'
  const statsFile = path.resolve('./dist/public/loadable-stats.json')
  const { extractor, scripts, styles } = new Loadable({ isSsr, statsFile })

  response.send(html({
    component: <ServerApp extractor={extractor} location={request.url} />,
    styles: styles,
    scripts: scripts,
    isSsr,
  }))
}
