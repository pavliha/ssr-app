import { extname, dirname, basename } from 'path'

const appendFileNameSuffix = (fileName, suffix) => {
  const baseName = basename(fileName)
  const extension = extname(baseName)
  const name = baseName.replace(extension, '')
  const dir = dirname(fileName)
  return `${dir}/${name}${suffix}${extension}`
}

export default appendFileNameSuffix
