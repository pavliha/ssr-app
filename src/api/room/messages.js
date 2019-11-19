import Http from 'services/Http'
import qs from 'querystring'

const messages = {

  loadMany(room_id, params = { page: 1, limit: 20 }) {
    return Http.get(`/rooms/${room_id}/messages?${qs.stringify(params)}`)
  },

  create(room_id, form) {
    return Http.post(`/rooms/${room_id}/messages`, form)
  },

  update(room_id, id, form) {
    return Http.put(`/rooms/${room_id}/messages/${id}`, form)
  },

  destroy(room_id, id) {
    return Http.delete(`/rooms/${room_id}/messages/${id}`)
  },
}

export default messages
