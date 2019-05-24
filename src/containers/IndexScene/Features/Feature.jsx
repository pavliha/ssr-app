import React from 'react'
import { object, string, node } from 'prop-types'
import { SvgIcon, Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    textAlign: 'center',
    maxWidth: 200,
  },
  icon: {
    fontSize: 60,
    marginBottom: 15,
  }
}

const Feature = ({ classes, title, icon, children }) =>
  <div className={classes.root}>
    <SvgIcon className={classes.icon}>{icon}</SvgIcon>
    <Typography gutterBottom align="inherit" variant="h5">{title}</Typography>
    <Typography align="inherit" variant="body1" color="textSecondary">{children}</Typography>
  </div>

Feature.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  icon: node.isRequired,
  children: string.isRequired,
}

export default withStyles(styles)(Feature)
