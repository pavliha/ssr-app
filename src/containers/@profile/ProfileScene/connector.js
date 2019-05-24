import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import currentUser from 'src/redux/users/selectors/currentUser'
import actions from 'src/redux/action'

const mapStateToProps = state => ({
  user: currentUser(state),
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    auth: {
      user: {
        account: {
          load: bindActionCreators(actions.auth.user.account.load, dispatch),
        },
      },
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
