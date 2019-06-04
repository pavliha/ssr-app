import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/styles'
import { StaticRouter } from 'react-router-dom'
import { ChunkExtractorManager } from '@loadable/server'
import Assets from 'lib/Assets'
import Loadable from 'lib/Loadable'
import App from './App'

const html = ({ root, assets }) => {
  const sheets = new ServerStyleSheets()
  const jsxWithStyles = sheets.collect(root)

  return `
    <html lang="ru">
    <head>
      ${assets.title}
      ${assets.meta}
      ${assets.links}
      ${assets.styles}
      <style id="jss-server-side">${sheets.toString()}</style>
    </head>
    <body>
       <div id="root">${renderToString(jsxWithStyles)}</div>
       ${assets.scripts} 
    </body>
    </html>
  `
}

export default () => async (request, response) => {
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

  response.send(html({ root, assets }))
}
