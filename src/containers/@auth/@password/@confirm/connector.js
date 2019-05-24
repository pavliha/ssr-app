import { connect } from 'react-redux'

const mapStateToProps = store => ({
  email: store.auth.email,
})

export default connect(mapStateToProps)
