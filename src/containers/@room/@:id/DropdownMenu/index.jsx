import React, { Component } from 'react'
import { object, func, shape, number } from 'prop-types'
import { IconButton, withStyles, Menu, MenuItem } from '@material-ui/core'
import MoreIcon from 'mdi-react/MoreVertIcon'
import { withRouter } from 'react-router-dom'
import { LeaveRoomDialog } from 'components'

const styles = (theme) => ({
  root: {},
  danger: {
    color: theme.palette.error.main
  }
})

class DropdownMenu extends Component {

  state = {
    anchorEl: null,
    isLeaveRoomDialogOpen: false
  }

  open = (e) => {
    this.setState({ anchorEl: e.currentTarget })
  }

  close = () => {
    this.setState({ anchorEl: null })
  }

  openLeaveRoomDialog = async () => {
    this.setState({ isLeaveRoomDialogOpen: true })
  }

  closeLeaveRoomDialog = () => {
    this.setState({ isLeaveRoomDialogOpen: false })
  }

  leaveRoom = async () => {
    const { room, history, onLeave } = this.props

    this.closeLeaveRoomDialog()

    await onLeave(room.id)

    history.push('/home')

  }

  render() {
    const { classes } = this.props
    const { anchorEl, isLeaveRoomDialogOpen } = this.state

    return (
      <div className={classes.root}>
        <IconButton onClick={this.open}><MoreIcon /></IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.close}
        >
          <MenuItem className={classes.danger} onClick={this.openLeaveRoomDialog}>
            ПОКИНУТЬ СОБЫТИЕ
          </MenuItem>
        </Menu>
        <LeaveRoomDialog
          isOpen={isLeaveRoomDialogOpen}
          onCancel={this.closeLeaveRoomDialog}
          onConfirm={this.leaveRoom}
        />
      </div>
    )
  }
}

DropdownMenu.propTypes = {
  classes: object.isRequired,
  room: shape({
    id: number.isRequired,
  }),
  history: shape({
    push: func.isRequired,
  }),
  onLeave: func.isRequired,
}

export default withStyles(styles)(withRouter(DropdownMenu))
