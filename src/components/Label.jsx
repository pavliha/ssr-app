import React from 'react'
import { object, string, node, oneOf } from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'

const styles = {
  root: {
    position: 'relative',
    padding: '5px 0',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    width: 200,
    fontFamily: 'Google Sans, Roboto,Arial,sans-serif',
  },
  control: {
    flexGrow: 1,
  },
  normalMargin: {
    minHeight: 43,
  },
}

const FieldLabel = ({ classes, title, children, margin }) =>
  <div className={classNames({ [classes.root]: true, [classes.normalMargin]: margin === 'normal' })}>
    <Typography className={classes.label}>{title}:</Typography>
    <div className={classes.control}>
      {children}
    </div>
  </div>

FieldLabel.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  classes: object.isRequired,
  margin: oneOf(['none', 'normal']),
}

export default withStyles(styles)(FieldLabel)
