import Http from 'services/Http'

const entertainment = {

  loadMany() {
    return Http.get(`/entertainments`)
  },

  load(entertainment_id) {
    return Http.get(`/entertainments/${entertainment_id}`)
  },

  create(form) {
    return Http.post(`/entertainments`, form)
  },

  update(entertainment_id, form) {
    return Http.put(`/entertainments/${entertainment_id}`, form)
  },

  destroy(entertainment_id) {
    return Http.delete(`entertainments/${entertainment_id}`)
  },
}

export default entertainment
