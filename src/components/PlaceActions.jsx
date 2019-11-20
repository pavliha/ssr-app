import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const styles = {
  root: {},
  primary: {
    marginRight: 20,
  },
}

const PlaceActions = ({ classes, phone }) => phone
  ? <div className={classes.root}>
    <a href={`tel:${phone}`}>
      <Button
        aria-label="call via phone"
        className={classes.primary}
        color="primary"
        variant="contained"
      >
        Позвонить
      </Button>
    </a>
  </div>
  : null

PlaceActions.propTypes = {
  classes: object.isRequired,
  phone: string,
}

export default withStyles(styles)(PlaceActions)
