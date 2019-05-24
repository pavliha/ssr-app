import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
  },
}

const Steps = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Steps.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Steps)
