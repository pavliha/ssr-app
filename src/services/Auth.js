/* eslint-disable class-methods-use-this,no-plusplus,no-console */
import JWT from 'jwt-decode'
import Cookie from 'services/Cookie'

class Auth {

  token = Cookie.get('token')

  user(token) {

    if (token) this.save(token)

    try {
      return JWT(token || this.token).data
    } catch (e) {
      return null
    }
  }

  save(token) {
    this.token = token
    Cookie.set('token', token)
  }

  logout() {
    Cookie.clear()
  }
}

const auth = new Auth()

export default auth
