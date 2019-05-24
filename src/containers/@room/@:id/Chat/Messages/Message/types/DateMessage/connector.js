import { connect } from 'react-redux'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'
import isMeAdmin from 'src/redux/rooms/selectors/isMeAdmin'

const mapStateToProps = (state) => ({
  isMeAdmin: isMeAdmin(state)
})

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      rooms: {
        update: bindActionCreators(actions.rooms.update, dispatch),
      },
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
