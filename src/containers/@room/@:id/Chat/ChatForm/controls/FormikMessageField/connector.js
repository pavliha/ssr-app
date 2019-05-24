import { connect } from 'react-redux'
import currentChannel from 'selectors/currentChannel'
import authEmployee from 'selectors/authEmployee'
import isMeAdmin from 'selectors/isMeAdmin'

const mapStateToProps = state => ({
  channel: currentChannel(state),
  authEmployee: authEmployee(state),
  isMeAdmin: isMeAdmin(state),
})

const mapDispatchToProps = () => ({
  actions: {},
})

export default connect(mapStateToProps, mapDispatchToProps)
