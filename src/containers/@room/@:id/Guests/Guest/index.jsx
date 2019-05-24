import React, { Component } from 'react'
import { object, func } from 'prop-types'
import userShape from 'shapes/user'
import authShape from 'shapes/auth'
import { ListItem, withStyles } from '@material-ui/core'
import { UserAvatar } from 'components'
import KickGuestDialog from './KickGuestDialog'
import GuestItemText from './GuestItemText'

const styles = {
  root: {
    '&:hover': {
      background: 'rgba(0,0,0,0.08)'
    },
    '&:hover aside': {
      display: 'flex'
    },
    '&:hover label': {
      display: 'none'
    }
  },
}

class Guest extends Component {

  state = {
    isKickGuestDialogOpen: false,
  }

  openKickGuestDialog = () => {
    this.setState({ isKickGuestDialogOpen: true })
  }

  closeKickGuestDialog = () => {
    this.setState({ isKickGuestDialogOpen: false })
  }

  kickGuest = () => {
    const { guest, onKick } = this.props
    this.closeKickGuestDialog()
    onKick(guest)
  }

  render() {
    const { classes, admin, guest, auth } = this.props
    const { isKickGuestDialogOpen } = this.state
    return (
      <ListItem className={classes.root}>
        <UserAvatar is_online={guest?.pivot?.is_online} user={guest} />
        <GuestItemText
          isAdmin={admin?.id === guest.id}
          isMe={guest.id !== auth.user_id}
          guest={guest}
          onClose={this.openKickGuestDialog}
        />
        <KickGuestDialog
          guest={guest}
          isOpen={isKickGuestDialogOpen}
          onCancel={this.closeKickGuestDialog}
          onConfirm={this.kickGuest}
        />
      </ListItem>
    )
  }
}

Guest.propTypes = {
  classes: object.isRequired,
  auth: authShape.isRequired,
  admin: userShape,
  guest: userShape.isRequired,
  onKick: func.isRequired,
}

export default withStyles(styles)(Guest)
