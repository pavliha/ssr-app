/* eslint-disable class-methods-use-this,no-plusplus,no-console */
import Cookies from 'universal-cookie'
import removeCookies from 'utils/removeCookies'

class Cookie {
  constructor() {
    this.cookies = new Cookies()
  }

  set(name, value) {
    const options = {
      path: '/',
      domain: undefined,
      secure: false,
    }

    console.log('SET', name, value)
    try {
      this.cookies.set(name, JSON.stringify(value), options)
    } catch (err) {
      this.cookies.set(name, value, options)
    }
  }

  put(values) {
    const entries = Object.entries(values)

    entries.forEach(([key, value]) => {
      this.set(key, value)
    })
  }

  get(name) {
    try {
      const response = JSON.parse(this.cookies.get(name))
      console.log('GET', name, response)

      return response
    } catch (err) {
      return this.cookies.get(name)
    }
  }

  clear() {
    const all = this.cookies.getAll()
    Object.keys(all).forEach((key) => {
      this.cookies.set(key, '')
      this.cookies.remove(key)
    })

    removeCookies()
  }
}

const cookie = new Cookie()

export default cookie
