import { connect } from 'react-redux'
import currentRoom from 'src/redux/rooms/selectors/currentRoom'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'
import assembleAuth from 'src/redux/auth/selectors/assembleAuth'

const mapStateToProps = state => ({
  room: currentRoom(state),
  auth: assembleAuth(state),
})

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      rooms: {
        load: bindActionCreators(actions.rooms.find, dispatch),
        update: bindActionCreators(actions.rooms.update, dispatch),
        leave: bindActionCreators(actions.rooms.leave, dispatch),

        guests: {
          loadMany: bindActionCreators(actions.rooms.guests.list, dispatch),
          kick: bindActionCreators(actions.rooms.guests.kick, dispatch),
          joined: bindActionCreators(actions.rooms.guests.joined, dispatch),
          left: bindActionCreators(actions.rooms.guests.left, dispatch),
        },
        messages: {
          loadMany: bindActionCreators(actions.rooms.messages.list, dispatch),
          create: bindActionCreators(actions.rooms.messages.create, dispatch),
          read: bindActionCreators(actions.rooms.messages.read, dispatch),
          receive: bindActionCreators(actions.rooms.messages.receive, dispatch)
        },
        invite: {
          load: bindActionCreators(actions.rooms.invite.load, dispatch),
          create: bindActionCreators(actions.rooms.invite.create, dispatch),
          update: bindActionCreators(actions.rooms.invite.update, dispatch),
        },
      },

      messages: {
        set: bindActionCreators(actions.messages.set, dispatch),
        remove: bindActionCreators(actions.messages.remove, dispatch),
      },

      place: {
        load: bindActionCreators(actions.places.load, dispatch),
        create: bindActionCreators(actions.places.create, dispatch),
        update: bindActionCreators(actions.places.update, dispatch),
      },
      users: {
        online: bindActionCreators(actions.users.online, dispatch),
        offline: bindActionCreators(actions.users.offline, dispatch),
      }
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
