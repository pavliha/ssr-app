import React from 'react'
import { object, string, number, bool } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'
import classNames from 'classnames'

const styles = {
  center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
}

const Loading = ({ classes, className, center, ...props }) =>
  <div className={classNames({ [className]: true, [classes.center]: center })}>
    <CircularProgress size={props.size || 60} {...props} />
  </div>

Loading.propTypes = {
  classes: object.isRequired,
  className: string,
  center: bool,
  size: number,
}

export default withStyles(styles)(Loading)
