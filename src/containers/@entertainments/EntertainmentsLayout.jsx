import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EntertainmentsScene from './EntertainmentsScene'
import { withStyles } from '@material-ui/styles'

const styles = () => ({})

const EntertainmentsLayout = () =>
  <Switch>
    <Route exact path="/" component={EntertainmentsScene} />
    <Route exact path="/entertainments" component={EntertainmentsScene} />
  </Switch>

export default withStyles(styles)(EntertainmentsLayout)
