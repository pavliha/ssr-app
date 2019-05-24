import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Header } from 'components'
import AuthDevider from './AndDevider'
import SocialLogin from './SocialLogin'
import sparks from '../IndexScene/Banner/sparks.png'
import LogoutScene from './@logout/LogoutScene'
import LoginScene from './@login/LoginScene'
import RegisterScene from './@register/RegisterScene'
import ActivateScene from './@activate/ActivateScene'
import PasswordLayout from './@password/PasswordLayout'

const styles = () => ({
  root: {
    height: '100vh',
    background: `url(${sparks})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    maxWidth: 400,
    height: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scene: {
    height: '70%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  divider: {
    color: 'white',
  },
  headerRoot: {
    position: 'absolute',
    background: 'transparent',
    boxShadow: 'none',
  }
})

const AuthLayout = ({ classes }) =>
  <div className={classes.root}>
    <Header classes={{ root: classes.headerRoot }} />
    <div className={classes.container}>
      <div className={classes.scene}>
        <div>
          <Switch>
            <Route exact path="/auth/register" component={RegisterScene} />
            <Route exact path="/auth/login" component={LoginScene} />
            <Route exact path="/auth/activate/:hash" component={ActivateScene} />
            <Route exact path="/auth/logout" component={LogoutScene} />
            <Route path="/auth/password" component={PasswordLayout} />
            <Redirect to="/auth/login" />
          </Switch>
        </div>
        <div className={classes.divider}>
          <AuthDevider />
        </div>
        <SocialLogin />
      </div>
    </div>
  </div>

AuthLayout.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AuthLayout)
