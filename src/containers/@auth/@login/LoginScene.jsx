import React, { Component } from 'react'
import AuthCard from 'src/containers/@auth/AuthCard'
import { Helmet } from 'react-helmet'
import LoginForm from './LoginForm'
import { func, shape } from 'prop-types'
import connector from './connector'
import Storage from 'services/Storage'

class LoginScene extends Component {

  login = async (credentials) => {
    const { actions, history } = this.props

    const result = await actions.login(credentials)
    const previous_user_location = Storage.get('previous_user_location')

    history.push(previous_user_location || '/home')

    return result
  }

  render() {
    return (
      <AuthCard title="ВОЙТИ">
        <Helmet>
          <title>
            Вход в аккаунт - Partymaker
          </title>
        </Helmet>
        <LoginForm onSubmit={this.login} />
      </AuthCard>
    )
  }
}

LoginScene.propTypes = {
  actions: shape({
    login: func.isRequired,
  }),
  history: shape({
    push: func.isRequired
  })
}

export default connector(LoginScene)
