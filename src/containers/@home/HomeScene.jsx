import React, { Component } from 'react'
import { arrayOf, shape, func, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import userShape from 'shapes/user'
import roomShape from 'shapes/room'
import { Header } from 'components'
import Parties from './Parties'
import Rooms from './Rooms'
import connector from './connector'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: 'white'
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'auto',
  },
  events: {
    maxWidth: 600,
    margin: '0 auto',
    paddingBottom: 200,
    padding: 15,
    flexGrow: 1,
    height: '100%',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  mapElement: {
    flexGrow: 1,

    height: `100%`,
    zIndex: 1,
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
  }
}

class HomeScene extends Component {

  componentDidMount() {
    const { actions } = this.props

    actions.rooms.loadMany()
  }

  createRoom = async () => {
    const { actions, history } = this.props
    const { action } = await actions.rooms.create()

    history.push(`/room/${action.payload.id}`)
  }

  leaveRoom = async (room_id) => {
    const { actions } = this.props
    actions.rooms.leave(room_id)
  }

  render() {
    const { classes, rooms, user } = this.props

    return (
      <div className={classes.root}>
        <Header user={user} />
        <div className={classes.container}>
          <div className={classes.events}>
            <Rooms
              rooms={rooms}
              onCreate={this.createRoom}
              onLeave={this.leaveRoom}
            />
          </div>
          <Parties />
        </div>
      </div>
    )
  }
}

HomeScene.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
  rooms: arrayOf(roomShape).isRequired,
  history: shape({
    push: func.isRequired,
  }),
  actions: shape({
    rooms: shape({
      loadMany: func.isRequired,
      create: func.isRequired,
      leave: func.isRequired,
    })
  })
}

export default withStyles(styles)(connector(HomeScene))
