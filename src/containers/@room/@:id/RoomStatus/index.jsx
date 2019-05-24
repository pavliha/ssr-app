import React from 'react'
import { node, object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import roomShape from 'shapes/room'
import moment from 'moment'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  titles: {
    paddingLeft: 13,
  },
}

const RoomStatus = (props) => {
  const { classes, room, children } = props

  const date = room.date && moment(room.date).format('D MMMM, dddd')

  return (
    <div className={classes.root}>
      <div className={classes.titles}>
        {children}
        <Typography variant="subtitle1" color="textSecondary">
          {date && `${date},`} Идем в {room?.place?.title || room?.place?.address}
        </Typography>
      </div>
    </div>
  )
}

RoomStatus.propTypes = {
  classes: object.isRequired,
  room: roomShape,
  children: node.isRequired,
}

export default withStyles(styles)(RoomStatus)
