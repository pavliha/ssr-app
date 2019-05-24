import { connect } from 'react-redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import currentInvite from 'src/redux/invites/selectors/currentInvite'
import { bindActionCreators } from 'redux'
import actions from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
  invite: currentInvite(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    loadInviteByToken: bindActionCreators(actions.invites.loadByToken, dispatch),
    acceptInvite: bindActionCreators(actions.invites.accept, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
