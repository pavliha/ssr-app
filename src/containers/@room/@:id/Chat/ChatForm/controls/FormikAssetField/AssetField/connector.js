import { connect } from 'react-redux'
import actions from 'src/redux/action'
import { bindActionCreators } from 'redux'

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => {
  return ({
    actions: {
      asset: {
        create: bindActionCreators(actions.assets.create, dispatch),
      },
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)
