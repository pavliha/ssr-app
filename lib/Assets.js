const { Helmet } = require('react-helmet')

class Assets {

  constructor(loadable) {
    this._styles = loadable.styles
    this._scripts = loadable.scripts
    this._helmet = Helmet.renderStatic()
  }

  get title() {
    return this._helmet.title.toString()
  }

  get meta() {
    return this._helmet.meta.toString()
  }

  get links() {
    return this._helmet.link.toString()
  }

  get styles() {
    return this._styles
  }

  get scripts() {
    return this._scripts
  }
}

export default Assets
