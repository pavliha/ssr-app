import Http from 'services/Http'
import user from './user'
import password from './password'
import rooms from './rooms'

const auth = {

  user,

  password,

  rooms,

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
