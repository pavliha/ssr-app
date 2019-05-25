import React from 'react'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets } from '@material-ui/styles'

export default ({ root, isSsr, scripts, styles }) => {
  const helmet = Helmet.renderStatic()
  const sheets = new ServerStyleSheets()
  const jsxWithStyles = sheets.collect(root)

  return `
    <html lang="ru">
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${styles}
      <style id="jss-server-side">${sheets.toString()}</style>
    </head>
    <body>
       ${isSsr ? `<div id="root">${renderToString(jsxWithStyles)}</div>` : `<div id="root" />`}
       ${scripts} 
    </Body>
    </html>
  `
}
