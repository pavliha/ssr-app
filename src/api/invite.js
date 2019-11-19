import Http from 'services/Http'

const invite = {
  load(invite_token) {
    return Http.get(`/invite/${invite_token}`)
  },
}

export default invite
