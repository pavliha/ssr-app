import React, { Component } from 'react'
import { shape, func } from 'prop-types'
import AuthCard from 'src/containers/@auth/AuthCard'
import ForgotForm from './ForgotForm'
import connector from './connector'

class ForgotScene extends Component {

  forgotPassword = async (form) => {
    const { actions } = this.props

    const { action } = await actions.forgotPassword(form)

    return action.payload
  }

  render() {
    return (
      <AuthCard
        images="forgot.jpg"
        title="Восстановление пароля"
        documentTitle="Восстановление пароля - Partymaker"
      >
        <ForgotForm onSubmit={this.forgotPassword} />
      </AuthCard>
    )
  }
}

ForgotScene.propTypes = {
  actions: shape({
    forgotPassword: func.isRequired,
  })
}

export default connector(ForgotScene)
