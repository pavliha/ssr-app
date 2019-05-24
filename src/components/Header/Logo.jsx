import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -3
  },
  city: {
    fontWeight: '100',
    padding: '0 15px'
  }
}

const Logo = ({ classes }) =>
  <div className={classes.root}>
    <Typography variant="h6" color="inherit">
      Partymaker
    </Typography>
    <Typography className={classes.city} color="secondary">Запорожье</Typography>
  </div>

Logo.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Logo)
