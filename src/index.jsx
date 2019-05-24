import React from 'react'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import withCodeSplitting from '../lib/withCodeSplitting'

const Body = ({ children, ...props }) =>
  <body {...props} dangerouslySetInnerHTML={{ __html: children }} />

export default ({ root, isSsr }) => {
  const helmet = Helmet.renderStatic()
  const sheets = new ServerStyleSheets()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()
  const [jsx, extractor] = withCodeSplitting(sheets.collect(root))

  return (
    <html {...htmlAttrs}>
    <head>
      {helmet.title.toComponent() || <title>Partymaker</title>}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
      {extractor.getStyleTags()}
    </head>
    <Body {...bodyAttrs}>
      {`
       <style id="jss-server-side">${sheets.toString()}</style>
       ${isSsr
        ? `<div id="root">${renderToString(jsx)}</div>`
        : `<div id="root" />`
        }
        ${extractor.getScriptTags()} 
      `}
    </Body>
    </html>
  )
}
