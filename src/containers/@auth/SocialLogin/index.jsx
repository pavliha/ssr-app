/* eslint-disable max-len */
import React, { Component } from 'react'
import { object } from 'prop-types'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { withRouter } from 'react-router-dom'
import { Button, withStyles } from '@material-ui/core'
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon'
import GoogleIcon from 'mdi-react/GoogleIcon'
import connector from './connector'

const styles = {
  root: {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
    borderRadius: 25,
    alignItems: 'center',
    borderColor: 'inherit',
  },

  text: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 550,
    fontSize: 15,
  },
}

class SocialLogin extends Component {
  loginFacebook = async FBuser => {
    const { actions, history } = this.props

    const userDetails = {
      name: FBuser.name,
      email: FBuser.email,
      provider_token: FBuser.accessToken,
      provider: 'facebook',
      provider_id: FBuser.id,
      avatar_url: FBuser.picture.data.url,
    }

    await actions.facebook(userDetails)
    history.push('/')
  }

  loginGoogle = async Guser => {
    const { actions, history } = this.props

    const userDetails = {
      name: Guser.profileObj.name,
      email: Guser.profileObj.email,
      provider_token: Guser.accessToken,
      provider: 'google',
      provider_id: Guser.googleId,
      avatar_url: Guser.profileObj.imageUrl,
    }

    await actions.google(userDetails)
    history.push('/')
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <FacebookLogin
          appId="2175525285996959"
          fields="name,email,picture"
          callback={this.loginFacebook}
          render={props => (
            <Button
              variant="outlined"
              color="inherit"
              onClick={props.onClick}
              className={classes.button}
            >
              <FacebookBoxIcon />
              <div className={classes.text}>Facebook</div>
            </Button>
          )}
        />

        <GoogleLogin
          clientId="860110060796-1oa17isdultt097medmjdslaovs204o9.apps.googleusercontent.com"
          fields="name,email,picture"
          onFailure={this.loginGoogle}
          onSuccess={this.loginGoogle}
          render={props => (
            <Button
              variant="outlined"
              color="inherit"
              onClick={props.onClick}
              className={classes.button}
            >
              <GoogleIcon />
              <div className={classes.text}>Google</div>
            </Button>
          )}
        />
      </div>
    )
  }
}

SocialLogin.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  history: object.isRequired,
}

export default withStyles(styles)(withRouter(connector(SocialLogin)))
