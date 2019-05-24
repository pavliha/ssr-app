import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    padding: '10px 0',
    display: 'flex',
  },

  takeAllSpace: {
    flex: 1,
    padding: '0 10px',
    alignSelf: 'center'
  },
}

const AndDevider = ({ classes }) =>
  <div className={classes.root}>
    <div className={classes.takeAllSpace}>
      <hr />
    </div>
    <Typography variant="subtitle1" color="inherit">ИЛИ</Typography>
    <div className={classes.takeAllSpace}>
      <hr />
    </div>
  </div>

AndDevider.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(AndDevider)
