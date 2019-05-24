import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/auth/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    resetPassword: bindActionCreators(auth.password.reset, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
