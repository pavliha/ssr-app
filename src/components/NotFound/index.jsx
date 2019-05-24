import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const NotFound = ({ classes }) =>
  <div className={classes.root}>
    Page not found
  </div>

NotFound.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(NotFound)
