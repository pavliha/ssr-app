import React, { Component } from 'react'
import { object, func } from 'prop-types'
import roomShape from 'shapes/room'
import { Button, Typography, withStyles } from '@material-ui/core'
import { OutlineCard } from 'components'
import sparksImg from 'assets/images/sparks.png'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { CloseButton, LeaveRoomDialog } from 'components'

const styles = {
  root: {
    position: 'relative',
    marginBottom: 15,
    backgroundSize: 'cover',
    height: 350,
    zIndex: 10,
    '&::after': {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.0))',
      content: '" "'
    }
  },
  content: {
    padding: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    flexGrow: 1,
  },
  body: {
    textAlign: 'right'
  },
  close: {
    position: 'absolute',
    top: 5,
    right: 5,
  }
}

class RoomCard extends Component {

  state = {
    isLeaveRoomDialogOpen: false,
  }

  openLeaveRoomDialog = () => {
    this.setState({ isLeaveRoomDialogOpen: true })
  }

  closeLeaveRoomDialog = () => {
    this.setState({ isLeaveRoomDialogOpen: false })
  }

  leaveRoom = async () => {
    const { room, onLeave } = this.props

    this.closeLeaveRoomDialog()

    onLeave(room.id)

  }

  render() {
    const { classes, room } = this.props
    const { isLeaveRoomDialogOpen } = this.state
    const background_url = room.invite?.background_url || sparksImg

    return (
      <OutlineCard className={classes.root} style={{ backgroundImage: `url(${background_url})` }}>
        <div className={classes.content}>
          <CloseButton className={classes.close} onClick={this.openLeaveRoomDialog} />
          <div className={classes.title}>
            <Typography color="secondary" gutterBottom variant="h4">
              {room.title || 'Новое событие'}
            </Typography>
            <Typography color="secondary">
              {room.place?.address || 'Место еще не установлено'}
            </Typography>
            <Typography color="secondary">
              {room.date
                ? `${moment(room.invite?.date).format('D MMMM, dddd')}, ${room.invite?.time || ''}`
                : 'Дата и время еще не установлены'}
            </Typography>
          </div>
          <div className={classes.body}>
            <Link to={`/room/${room.id}`}>
              <Button color="secondary" variant="outlined">
                ОТКРЫТЬ
              </Button>
            </Link>
          </div>
        </div>
        <LeaveRoomDialog
          isOpen={isLeaveRoomDialogOpen}
          onCancel={this.closeLeaveRoomDialog}
          onConfirm={this.leaveRoom}
        />
      </OutlineCard>
    )
  }
}

RoomCard.propTypes = {
  classes: object.isRequired,
  room: roomShape.isRequired,
  onLeave: func.isRequired,
}

export default withStyles(styles)(RoomCard)
