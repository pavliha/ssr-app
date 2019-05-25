import { ChunkExtractor } from '@loadable/server'

class Loadable {
  constructor({ isSsr, statsFile }) {
    this.extractor = new ChunkExtractor({
      entrypoints: ['client'],
      statsFile,
    })
    debugger
    this.isSsr = isSsr
  }

  removeRequiredChunks(scriptTags) {
    const string = `<script id="__LOADABLE_REQUIRED_CHUNKS__" type="application/json">[]</script>`
    return scriptTags.replace(string, '')
  }

  get scripts() {
    const scriptTags = this.extractor.getScriptTags()
    const result = this.isSsr ? scriptTags : this.removeRequiredChunks(scriptTags)
    debugger
    return result
  }

  get styles() {
    return this.extractor.getStyleTags()
  }
}

export default Loadable
