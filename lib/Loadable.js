import { ChunkExtractor } from '@loadable/server'

class Loadable {
  constructor({ isSsr, statsFile }) {
    this.extractor = new ChunkExtractor({
      entrypoints: ['client'],
      statsFile,
    })
    this.isSsr = isSsr
  }

  get scripts() {
    return this.extractor.getScriptTags()
  }

  get styles() {
    return this.extractor.getStyleTags()
  }
}

export default Loadable
