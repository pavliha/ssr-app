const Stage = {
  get isDevelop() {
    return process.argv.includes('--stage=develop')
  },
  get isTesting() {
    return process.argv.includes('--stage=test')
  },
  get isProd() {
    return process.argv.includes('--stage=prod')
  }
}

module.exports = Stage
