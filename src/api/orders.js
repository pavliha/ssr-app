import Http from 'services/Http'

const orders = {

  load(order_id) {
    return Http.get(`/orders/${order_id}`)
  },

  create(form) {
    return Http.post(`/orders`, form)
  },

}

export default orders
