import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import home from './home.jpg'
import home1 from './home1.jpg'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 600,
    marginBottom: 50
  },
  headline: {
    padding: '30px 0 0 0',
  },
  screenshots: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  home: {
    width: '50%',
  },
  home1: {
    marginTop: 100,
    marginLeft: -500,
    width: '50%',
  }
}

const Screenshots = ({ classes }) =>
  <section className={classes.root}>
    <Typography className={classes.headline} variant="h4">Скриншоты</Typography>
    <div className={classes.screenshots}>
      <img className={classes.home} alt="Home Page" src={home} />
      <img className={classes.home1} alt="Filled Home Page" src={home1} />
    </div>
  </section>

Screenshots.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Screenshots)
