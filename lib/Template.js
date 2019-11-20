import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'
import { renderToString } from 'react-dom/server'
import Loadable from 'lib/Loadable'
import Assets from 'lib/Assets'
import { ChunkExtractorManager } from '@loadable/server'

class Template {

  constructor(jsx) {
    this.loadable = new Loadable('./dist/public/loadable-stats.json')
    this.assets = new Assets(this.loadable)
    this.sheets = new ServerStyleSheets()
    this.jsx = jsx
  }

  _extractStyles(jsx) {
    const root = (
      <ChunkExtractorManager extractor={this.loadable.extractor}>
        {jsx}
      </ChunkExtractorManager>
    )

    return this.sheets.collect(root)
  }

  render() {
    const jsx = this._extractStyles(this.jsx)
    const html = renderToString(jsx)

    return `
      <html lang="ru">
      <head>
        ${this.assets.title}
        ${this.assets.meta}
        ${this.assets.links}
        ${this.assets.styles}
        <style id="jss-server-side">${this.sheets.toString()}</style>
      </head>
      <body>
         <div id="root">${html}</div>
         ${this.assets.scripts} 
      </body>
      </html>
  `
  }

}

export default Template
