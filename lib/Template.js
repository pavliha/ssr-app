import React from 'react'
import { renderToString } from 'react-dom/server'
import Loadable from 'lib/Loadable'
import Assets from 'lib/Assets'
import { ChunkExtractorManager } from '@loadable/server'

class Template {

  constructor(jsx) {
    this.loadable = new Loadable('./dist/public/loadable-stats.json')
    this.assets = new Assets(this.loadable)
    this.jsx = jsx
  }

  _extractStyles(jsx) {
    const root = (
      <ChunkExtractorManager extractor={this.loadable.extractor}>
        {jsx}
      </ChunkExtractorManager>
    )

    return this.assets.collect(root)
  }

  render(callback) {
    const jsx = this._extractStyles(this.jsx)
    const html = renderToString(jsx)

    return callback(html, this.assets)
  }

}

export default Template
