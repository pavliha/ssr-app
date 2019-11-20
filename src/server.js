import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { StaticRouter } from 'react-router-dom'
import { ChunkExtractorManager } from '@loadable/server'
import Assets from 'lib/Assets'
import Loadable from 'lib/Loadable'
import App from './App'

const createHtml = ({ root, assets }) => {
  const sheets = new ServerStyleSheets()

  const jsx = sheets.collect(root)
  const html = renderToString(jsx)
  const css = sheets.toString()

  return `
    <html lang="ru">
    <head>
      ${assets.title}
      ${assets.meta}
      ${assets.links}
      ${assets.styles}
      <style id="jss-server-side">${css}</style>
    </head>
    <body>
       <div id="root">${html}</div>
       ${assets.scripts} 
    </body>
    </html>
  `
}

const render = async (request, response) => {
  const context = {}
  const loadable = new Loadable('./dist/public/loadable-stats.json')
  const assets = new Assets(loadable)

  const root = (
    <ChunkExtractorManager extractor={loadable.extractor}>
      <StaticRouter context={context} location={request.url}>
        <App />
      </StaticRouter>
    </ChunkExtractorManager>
  )

  response.send(createHtml({ root, assets }))
}

export default () => render
