import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from 'src/redux/action'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  handleLogout: bindActionCreators(actions.auth.logout, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)
