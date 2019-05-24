import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import InviteScene from './@:id/InviteScene'

const styles = () => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flexGrow: 1,
    display: 'flex'
  },
})

const InviteLayout = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.container}>
      <Switch>
        <Route exact path="/invite/:token" component={InviteScene} />
      </Switch>
    </div>
  </div>

InviteLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(InviteLayout)
