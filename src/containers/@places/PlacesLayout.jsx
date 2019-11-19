import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PlaceScene from './@id/PlaceScene'

const PlacesLayout = () =>
  <Switch>
    <Route exact path="/places/:id" component={PlaceScene} />
  </Switch>

export default PlacesLayout
