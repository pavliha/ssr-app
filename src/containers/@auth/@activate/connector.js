import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/auth/action'
import authUser from 'src/redux/users/selectors/currentUser'

const mapStateToProps = store => ({
  loading: store.auth.isLoading,
  isActive: authUser(store)?.isActive,
})

const mapDispatchToProps = dispatch => ({
  actions: {
    activate: bindActionCreators(auth.activate, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
