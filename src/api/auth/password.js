import Http from 'services/Http'

const password = {
  forgot(credentials) {
    return Http.post('/auth/password/forgot', credentials)
  },

  reset(credentials) {
    const { password, hash } = credentials

    return Http.post(`/auth/password/reset/${hash}`, {
      password,
      password_repeat: password
    })
  },

  update({ password, password_new, password_repeat }) {
    return Http.put(`/auth/password/update`, {
      password,
      password_new,
      password_repeat
    })
  }
}

export default password
