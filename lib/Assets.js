import Helmet from 'react-helmet'

class Assets {

  _helmet = Helmet.renderStatic()

  constructor(loadable) {
    this._styles = loadable.styles
    this._scripts = loadable.scripts
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
