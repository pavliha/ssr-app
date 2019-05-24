import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import actions from 'src/redux/action'
import assembleRooms from 'src/redux/rooms/selectors/assembleRooms'

const mapStateToProps = state => ({
  user: currentUser(state),
  rooms: assembleRooms(state)
})

const mapDispatchToProps = dispatch => ({
  actions: {
    rooms: {
      loadMany: bindActionCreators(actions.rooms.list, dispatch),
      create: bindActionCreators(actions.rooms.create, dispatch),
      leave: bindActionCreators(actions.rooms.leave, dispatch)
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
