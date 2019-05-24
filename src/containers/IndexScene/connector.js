import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import action from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    logout: bindActionCreators(action.auth.logout, dispatch)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
