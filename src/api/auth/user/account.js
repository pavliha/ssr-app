import Http from 'services/Http'

const account = {

  load() {
    return Http.get(`/auth/user/account`)
  },

  update(form) {
    return Http.put(`/auth/user/account`, form)
  },
}

export default account
