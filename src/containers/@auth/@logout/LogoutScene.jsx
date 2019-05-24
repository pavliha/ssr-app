import React, { Component } from 'react'
import { func } from 'prop-types'
import { Redirect } from 'react-router-dom'
import connector from './connector'
import Cookie from 'services/Cookie'

class Logout extends Component {
  componentDidMount() {
    const { handleLogout } = this.props

    Cookie.clear()

    handleLogout()
  }

  render() {
    return <Redirect to="/auth/login" />
  }
}

Logout.propTypes = {
  handleLogout: func.isRequired,
}

export default connector(Logout)
