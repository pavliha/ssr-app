import Http from 'services/Http'

const order = {

  load(token) {
    return Http.get(`/order/${token}`)
  },

  confirm(token) {
    return Http.put(`/order/${token}/confirm`)
  },

  reject(token) {
    return Http.put(`/order/${token}/reject`)
  }

}

export default order
