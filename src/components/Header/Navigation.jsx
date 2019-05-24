import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    marginLeft: 60,
    flexGrow: 1,
  },
}

const Navigation = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

Navigation.propTypes = {
  classes: object.isRequired,
  children: node,
}

export default withStyles(styles)(Navigation)
