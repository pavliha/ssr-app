import Http from 'services/Http'

import url from './url'

const asset = {

  url,

  loadMany() {
    return Http.get('/assets')
  },

  load(id) {
    return Http.get(`/assets/${id}`)
  },

  create(file, progress) {
    const form = new FormData()
    form.append('title', file.name)
    form.append('file', file)

    return Http.post('/assets', form, {
      onUploadProgress: e => progress(Math.round((e.loaded * 100) / e.total))
    })
  },

  update(id, form) {
    return Http.put(`/assets/${id}`, form)
  },

  destroy(id) {
    return Http.delete(`/assets/${id}`)
  },
}

export default asset
