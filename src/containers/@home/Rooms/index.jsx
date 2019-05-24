import React from 'react'
import { object, func, arrayOf } from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import roomShape from 'shapes/room'
import { Typography, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import NewRoom from './NewRoom'
import RoomCard from './RoomCard'
import CreateRoom from '../CreateRoom'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: '40px',
    marginBottom: '20px',
  }
}

const Rooms = ({ classes, rooms, onCreate, onLeave }) => {
  if (isEmpty(rooms)) {
    return (
      <div className={classNames([classes.root, classes.centered])}>
        <NewRoom onCreate={onCreate} />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <CreateRoom onCreate={onCreate} />
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
      >
        Мои события
      </Typography>
      {rooms.map(room => (
        <RoomCard
          key={room.id}
          room={room}
          onLeave={onLeave}
        />
      ))}
    </div>
  )
}

Rooms.propTypes = {
  classes: object.isRequired,
  rooms: arrayOf(roomShape).isRequired,
  onCreate: func.isRequired,
  onLeave: func.isRequired,
}

export default withStyles(styles)(Rooms)
