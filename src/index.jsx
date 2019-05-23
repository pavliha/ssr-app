import React from 'react'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import withCodeSplitting from '../lib/withCodeSplitting'

const Body = ({ children, ...props }) =>
  <body {...props} dangerouslySetInnerHTML={{ __html: children }} />

export default ({ root, isSsr }) => {
  const helmet = Helmet.renderStatic()
  const htmlAttrs = helmet.htmlAttributes.toComponent()
  const bodyAttrs = helmet.bodyAttributes.toComponent()

  const [jsx, extractor] = withCodeSplitting(jsx)

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
       ${isSsr
        ? `<div id="root">${renderToString(root)}</div>`
        : `<div id="root" />`
        }
        ${extractor.getScriptTags()} 
      `}
    </Body>
    </html>
  )
}
