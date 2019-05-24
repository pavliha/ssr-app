import React from 'react'
import { object, string, number } from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import { CircularProgress } from '@material-ui/core'

const styles = {}

const Loading = ({ classes, className, ...props }) =>
  <div className={className}>
    <CircularProgress size={props.size || 60} {...props} classes={classes} />
  </div>

Loading.propTypes = {
  classes: object.isRequired,
  className: string,
  size: number,
}

export default withStyles(styles)(Loading)
