import React from 'react'
import { renderToString } from 'react-dom/server'

export default ({ root }) =>
  <html lang="ru">
  <head>
    <title>Partymaker</title>
  </head>
  <body>
  <div id="root" dangerouslySetInnerHTML={{ __html: renderToString(root) }} />
  </body>
  </html>
