import React from 'react'
import { shape, string, any } from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import { connect, select } from 'src/redux'
import { userShape } from 'shapes'
import Storage from 'services/Storage'

const AuthGate = ({ redux: { user }, location, ...props }) => {

  Storage.put({ previous_user_location: props.path })

  if (!user) return <Redirect to="/auth/login" />

  return <Route {...props} />
}

AuthGate.propTypes = {
  path: string,
  location: any,
  redux: shape({
    user: userShape
  })
}

const redux = (state) => ({
  user: select.auth.user(state)
})

export default connect(redux)(AuthGate)
