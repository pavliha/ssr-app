import Http from 'src/services/Http'

const asset = {

  list() {
    return Http.get('/assets')
  },

  find(id) {
    return Http.get(`/assets/${id}`)
  },

  create(file, config) {
    const form = new FormData()
    form.append('title', file.name)
    form.append('file', file)

    return Http.post('/assets', form, config)
  },

  update(id, form) {
    return Http.put(`/assets/${id}`, form)
  },

  destroy(id) {
    return Http.delete(`/assets/${id}`)
  },
}

export default asset
