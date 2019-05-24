import React from 'react'
import { object, func } from 'prop-types'
import { withStyles, Button } from '@material-ui/core'
import OutlineCard from 'src/components/OutlineCard'

const styles = {
  root: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}

const CreateRoom = ({ classes, onCreate }) =>
  <OutlineCard className={classes.root}>
    <Button variant="contained" color="primary" onClick={onCreate}>
      новое событие
    </Button>
  </OutlineCard>

CreateRoom.propTypes = {
  classes: object.isRequired,
  onCreate: func.isRequired,
}

export default withStyles(styles)(CreateRoom)
