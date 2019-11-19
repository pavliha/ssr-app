import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default (redux) => (Component) => {
  let entries

  const mapStateToProps = (state, props) => {
    entries = Object.entries(redux(state, props))
    const entities = entries.filter(entry => typeof entry[1] !== 'function')

    return entities.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
  }

  const mapDispatchToProps = (dispatch) => {
    const actions = entries.filter(entry => typeof entry[1] === 'function')

    return actions.reduce((acc, [key, value]) => {
      return { ...acc, [key]: bindActionCreators(value, dispatch) }
    }, {})
  }

  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
      ...ownProps,
      redux: {
        ...stateProps,
        ...dispatchProps,
      },
    }
  }

  return connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
}
