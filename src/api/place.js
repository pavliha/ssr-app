import Http from 'services/Http'
import comments from './comments'

const place = {

  comments,

  loadMany() {
    return Http.get(`/places`)
  },

  load(place_id) {
    return Http.get(`/places/${place_id}`)
  },

  create(form) {
    return Http.post(`/places`, form)
  },

  update(place_id, form) {
    return Http.put(`/places/${place_id}`, form)
  },

  destroy(place_id) {
    return Http.delete(`places/${place_id}`)
  },
}

export default place
