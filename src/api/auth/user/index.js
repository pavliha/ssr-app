import Http from 'services/Http'
import account from './account'

const user = {

  account,

  load() {
    return Http.get(`/auth/user`)
  },

  update(form) {
    return Http.put(`/auth/user`, form)
  },
}

export default user
