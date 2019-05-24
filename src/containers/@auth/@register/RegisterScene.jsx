import React, { Component } from 'react'
import { shape, func } from 'prop-types'
import AuthCard from 'containers/@auth/AuthCard'
import RegisterForm from './RegisterForm'
import connector from './connector'
import { Helmet } from 'react-helmet'
import Storage from 'services/Storage'

class RegisterScene extends Component {

  register = async credentials => {
    const { history, actions } = this.props

    await actions.register(credentials)

    const previous_user_location = Storage.get('previous_user_location')

    history.push(previous_user_location || '/home')
  }

  render() {
    return (
      <AuthCard title="РЕГИСТРАЦИЯ">
        <Helmet>
          <title>Регистрация - Partymaker</title>
        </Helmet>
        <RegisterForm onSubmit={this.register} />
      </AuthCard>
    )
  }
}

RegisterScene.propTypes = {
  actions: shape({
    register: func.isRequired,
  }),
  history: shape({
    push: func.isRequired
  })
}

export default connector(RegisterScene)
