import React from 'react'
import { shape, string } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import Auth from 'src/services/Auth'
import Storage from 'src/services/Storage'

const AuthGate = (props) => {
  const { ...rest } = props
  const user = Auth.user()

  Storage.put({
    previous_user_location: props.location.pathname
  })

  if (!user) return <Redirect to="/auth/login" />

  return <Route {...rest} />
}

AuthGate.propTypes = {
  location: shape({
    pathname: string,
  })
}

export default AuthGate
