import React, { Component } from 'react'
import { shape, string, func } from 'prop-types'
import AuthCard from 'src/containers/@auth/AuthCard'
import ResetForm from './ResetForm'
import connector from './connector'

class ResetScene extends Component {

  resetPassword = async ({ password }) => {
    const { match, actions, history } = this.props

    await actions.resetPassword({
      hash: match.params.hash,
      password
    })

    history.push('/home')
  }

  render() {
    return (
      <AuthCard
        images="forgot.jpg"
        title="Восстановление пароля"
        documentTitle="Восстановление пароля - Partymaker"
      >
        <ResetForm onSubmit={this.resetPassword} />
      </AuthCard>
    )
  }
}

ResetScene.propTypes = {
  history: shape({
    push: func.isRequired,
  }),
  match: shape({
    params: shape({
      hash: string.isRequired,
    })
  }).isRequired,
  actions: shape({
    resetPassword: func.isRequired,
  })
}

export default connector(ResetScene)
