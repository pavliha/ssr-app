import React from 'react'
import { object } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles } from '@material-ui/core'
import { Header } from 'components'
import { Switch, Route } from 'react-router-dom'
import ProfileScene from './ProfileScene'
import SettingsScene from './@settings/SettingsScene'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
}

const ProfileLayout = ({ classes, user, }) =>
  <div className={classes.root}>
    <Header user={user} />
    <Switch>
      <Route exact path="/profile" component={ProfileScene} />
      <Route exact path="/profile/settings" component={SettingsScene} />
    </Switch>
  </div>

ProfileLayout.propTypes = {
  user: userShape,
  classes: object.isRequired,
}

export default withStyles(styles)(connector(ProfileLayout))
