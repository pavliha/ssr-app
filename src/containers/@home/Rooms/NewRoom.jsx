import React from 'react'
import { object, func } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    textAlign: 'center',
    maxWidth: 250,
  },
}

const NewRoom = ({ classes, onCreate }) =>
  <div className={classes.root}>
    <Typography className={classes.caption} gutterBottom color="textSecondary">
      Вы пока не являетесь участником ни одного мероприятия
    </Typography>
    <Link to="/room">
      <Button variant="contained" onClick={onCreate} color="primary">
        создать событие
      </Button>
    </Link>
  </div>

NewRoom.propTypes = {
  classes: object.isRequired,
  onCreate: func.isRequired,
}

export default withStyles(styles)(NewRoom)
