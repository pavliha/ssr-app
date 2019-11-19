import Http from 'services/Http'
import messages from './messages'
import orders from '../orders'
import guests from './guests'

const room = {

  order: orders,

  guests,

  messages,

  loadMany() {
    return Http.get('/rooms')
  },

  load(id) {
    return Http.get(`/rooms/${id}`)
  },

  create(form) {
    return Http.post('/rooms', form)
  },

  update(id, form) {
    return Http.put(`/rooms/${id}`, form)
  },

  leave(id) {
    return Http.delete(`/rooms/${id}`)
  },

  join(room_id) {
    return Http.post(`/invite/accept/${room_id}`)
  }
}

export default room
