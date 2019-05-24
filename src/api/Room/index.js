import Http from 'services/Http'
import invite from './Invite'
import place from './Place'
import message from './Message'
import guests from './Guest'

class Room {

  invite = invite

  place = place

  guests = guests

  messages = message

  list() {
    return Http.get('/rooms')
  }

  find(id) {
    return Http.get(`/rooms/${id}`)
  }

  create(form) {
    return Http.post('/rooms', form)
  }

  update(id, form) {
    return Http.put(`/rooms/${id}`, form)
  }

  leave(id) {
    return Http.delete(`/rooms/${id}`)
  }
}

const room = new Room()

export default room
