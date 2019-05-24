import Http from 'services/Http'

const invite = {

  fromToken(token) {
    return Http.get(`/invite/${token}`)
  },

  accept(user_id, token) {
    return Http.post(`/invite/${token}`, { user_id })
  },

}

export default invite
