import React from 'react'
import { object, number } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    width: 76,
    height: 76,
    background: theme.palette.primary.main,
    color: 'white',
    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const NumberIcon = ({ classes, number, }) =>
  <div>
    <div className={classes.root}>
      <Typography color="inherit" variant="h4">{number}</Typography>
    </div>
  </div>

NumberIcon.propTypes = {
  classes: object.isRequired,
  number: number.isRequired
}

export default withStyles(styles)(NumberIcon)
