import { ServerStyleSheets } from '@material-ui/styles'
import { Helmet } from 'react-helmet'

class Assets {

  constructor(loadable) {
    this._styles = loadable.styles
    this._scripts = loadable.scripts
    this._helmet = Helmet.renderStatic()
    this._sheets = new ServerStyleSheets()
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
    return this._styles + `\n<style id="jss-server-side">${this._sheets.toString()}</style>`
  }

  get scripts() {
    return this._scripts
  }

  collect(jsx) {
    return this._sheets.collect(jsx)
  }
}

export default Assets
