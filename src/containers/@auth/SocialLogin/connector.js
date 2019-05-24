import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/auth/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
  actions: {
    google: bindActionCreators(auth.google, dispatch),
    facebook: bindActionCreators(auth.facebook, dispatch),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)
