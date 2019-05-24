import Http from 'services/Http'
import password from './Password'
import user from './User'

const auth = {

  password,

  user,

  register(credentials) {
    return Http.post('/auth/register', credentials)
  },

  login(credentials) {
    return Http.post('/auth/login', credentials)
  },

  google(Guser) {
    return Http.post('/auth/social', Guser)
  },

  facebook(FBuser) {
    return Http.post('/auth/social', FBuser)
  },

  activate(hash) {
    return Http.get(`/auth/activate/${hash}`)
  },

  logout() {
    return Http.post('/auth/logout')
  },
}

export default auth
