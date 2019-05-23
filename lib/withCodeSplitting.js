import { ChunkExtractor } from '@loadable/server'

export default (jsx) => {
  const extractor = new ChunkExtractor({
    entrypoints: ['client'],
    statsFile: '../dist/public/loadable-stats.json',
  })

  return [extractor.collectChunks(jsx), extractor]
}
