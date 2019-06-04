import { ChunkExtractor } from '@loadable/server'
import path from 'path'

class Loadable {
  constructor(statsPath) {
    this._extractor = new ChunkExtractor({
      entrypoints: ['client'],
      statsFile: path.resolve(statsPath),
    })
  }

  get extractor() {
    return this._extractor
  }

  get scripts() {
    return this._extractor.getScriptTags()
  }

  get styles() {
    return this._extractor.getStyleTags()
  }
}

export default Loadable
