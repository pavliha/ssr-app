import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import { object, func, shape } from 'prop-types'
import { Header } from 'components'
import Banner from './Banner'
import Features from './Features'
import Screenshots from './Screenshots'
import StepByStep from './StepByStep'
import ContactUs from './ContactUs'
import Footer from './Footer'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  headerRoot: {
    position: 'absolute',
    background: 'transparent',
    boxShadow: 'none',
  },
  sections: {
    margin: '0 auto',
    maxWidth: 1280,
  }
}

class LandingScene extends Component {

  logout = () => {
    const { actions } = this.props
    actions.auth.logout()
  }

  render() {
    const { classes, user } = this.props

    return (
      <div className={classes.root}>
        <Header
          classes={{ root: classes.headerRoot }}
          user={user}
          onLogout={this.logout}
        />
        <Banner />
        <div className={classes.sections}>
          <Features />
          <Screenshots />
          <StepByStep />
          <ContactUs />
          <Footer />
        </div>
      </div>
    )
  }
}

LandingScene.propTypes = {
  classes: object.isRequired,
  user: userShape,
  actions: shape({
    logout: func.isRequired,
  })
}
export default withStyles(styles)(connector(LandingScene))
