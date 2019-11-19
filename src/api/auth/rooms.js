import Http from 'services/Http'

const rooms = {
  loadMany() {
    return Http.get('/auth/rooms')
  },
}

export default rooms
