import Http from 'services/Http'

const invite = {

  find(room_id) {
    return Http.get(`/rooms/${room_id}/invite`)
  },

  create(room_id, form) {
    return Http.post(`/rooms/${room_id}/invite`, form)
  },

  update(room_id, form) {
    return Http.put(`/rooms/${room_id}/invite`, form)
  },

  destroy(room_id) {
    return Http.delete(`/rooms/${room_id}/invite`)
  },
}

export default invite
