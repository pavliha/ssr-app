import React from 'react'
import { object, node } from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    fontSize: 18,
    fontFamily: 'Google Sans, Arial, sans-serif',
    fontWeight: 500,
  },
}

const PlaceSubtitle = ({ classes, children }) =>
  <Typography
    className={classes.root}
    gutterBottom
    variant="subtitle1"
  >
    {children}
  </Typography>

PlaceSubtitle.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(PlaceSubtitle)
