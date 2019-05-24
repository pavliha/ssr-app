import Ws from 'services/Ws'

export default async ({ match, actions }) => {
  const room_id = match.params.id
  const socket = await Ws.subscribe(`room:${room_id}`)

  socket.emit('join', room_id)

  socket.on('join', (user_id) => {
    actions.rooms.messages.read(room_id)
    actions.users.online(user_id)
  })

  socket.on('leave', (user_id) => {
    actions.users.offline(user_id)
  })

  socket.on('guest:joined', (user) => {
    actions.rooms.guests.joined(room_id, user)
  })

  socket.on('guest:left', (user) => {
    actions.rooms.guests.left(room_id, user)
  })

  socket.on('message', actions.rooms.messages.receive)

  return socket
}
