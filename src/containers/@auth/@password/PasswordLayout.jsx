import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ForgotScene from './@forgot/ForgotScene'
import ConfirmScene from './@confirm/ConfirmScene'
import ResetScene from './@reset/ResetScene'

const PasswordLayout = () =>
  <Switch>
    <Route path="/auth/password/forgot" component={ForgotScene} />
    <Route path="/auth/password/confirm" component={ConfirmScene} />
    <Route path="/auth/password/reset/:hash" component={ResetScene} />
  </Switch>

export default PasswordLayout
