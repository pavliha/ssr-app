import React from 'react'
import { object, func, string } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'
import classNames from 'classnames'

const styles = {
  root: {
    marginRight: 5,
  },
}

const CloseButton = ({ classes, onClick, className }) =>
  <div className={classNames(classes.root, className)}>
    <IconButton color="primary" onClick={onClick}>
      <CloseIcon />
    </IconButton>
  </div>

CloseButton.propTypes = {
  classes: object.isRequired,
  className: string,
  onClick: func.isRequired
}

export default withStyles(styles)(CloseButton)
