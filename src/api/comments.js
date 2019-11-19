import Http from 'services/Http'

const comments = {

  create(place_id, form) {
    return Http.post(`/places/${place_id}/comments`, form)
  }

}

export default comments
