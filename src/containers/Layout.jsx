import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EntertainmentsLayout from './@entertainments/EntertainmentsLayout'
import PlacesLayout from './@places/PlacesLayout'

const Layout = () =>
  <Switch>
    <Route exact path="/" component={EntertainmentsLayout} />
    <Route path="/entertainments" component={EntertainmentsLayout} />
    <Route path="/places" component={PlacesLayout} />
  </Switch>

export default Layout
