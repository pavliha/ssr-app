import React from 'react'
import { bool, string, func, shape } from 'prop-types'
import { Typography } from '@material-ui/core'
import AuthCard from 'src/containers/@auth/AuthCard'
import { Loading } from 'components'
import connector from './connector'

class ActivateScene extends React.Component {
  componentDidMount() {
    const { actions, isActive, match, history } = this.props
    if (isActive) history.push('/home')
    actions.activate(match.params.hash)
  }

  render() {
    const { isLoading, isActive } = this.props

    if (isLoading) return <Loading />

    return (
      <AuthCard
        documentTitle="Активация - Partymaker"
        images="register.jpg"
        title={isActive
          ? <Typography variant="h5" align="center">Активация прошла успешно</Typography>
          : <Typography variant="h5" align="center" color="error">Активация не успешна</Typography>}
      />
    )
  }
}

ActivateScene.propTypes = {
  isActive: bool.isRequired,
  isLoading: bool.isRequired,
  actions: shape({
    activate: func.isRequired,
  }).isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired,
  match: shape({
    params: shape({
      hash: string,
    })
  }).isRequired,
}

export default connector(ActivateScene)
