import Http from 'services/Http'

const asset = {

  loadMany() {
    return Http.get('/assets/url')
  },

  load(url) {
    return Http.get(`/assets/url/${url}`)
  },

  create(url) {
    return Http.post('/assets/url', { url })
  },

  destroy(url) {
    return Http.delete(`/assets/url/${encodeURIComponent(url)}`)
  },
}

export default asset
