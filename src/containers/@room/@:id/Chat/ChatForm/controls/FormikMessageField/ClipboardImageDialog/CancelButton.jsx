import React from 'react'
import { object, func } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {},
}

const CancelButton = ({ classes, onClick }) =>
  <Button
    classes={classes}
    onClick={onClick}
  >
    Отменить
  </Button>

CancelButton.propTypes = {
  classes: object.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(CancelButton)
