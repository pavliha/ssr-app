import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EntertainmentsLayout from './@entertainments/EntertainmentsLayout'
import PlacesLayout from './@places/PlacesLayout'
import IndexScene from 'containers/IndexScene'

const Layout = () =>
  <Switch>
    <Route exact path="/" component={IndexScene} />
    <Route path="/entertainments" component={EntertainmentsLayout} />
    <Route path="/places" component={PlacesLayout} />
  </Switch>

export default Layout
