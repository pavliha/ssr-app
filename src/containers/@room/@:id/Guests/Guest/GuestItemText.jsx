import React, { Component } from 'react'
import { object, func, bool } from 'prop-types'
import userShape from 'shapes/user'
import { Typography, withStyles } from '@material-ui/core'
import { CloseButton } from 'components'
import moment from 'moment'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px',
    flexGrow: 1,
    alignItems: 'center',
    minHeight: 48,
  },
  actions: {
    display: 'none'
  },
}

class GuestItemText extends Component {
  lastSeen = (guest) => {
    if (guest?.pivot?.is_online) return 'Онлайн'
    if (guest?.pivot?.last_seen) {
      const lastSeen = moment(guest.pivot?.last_seen, 'YYYY-MM-DD HH:mm:ss').fromNow()

      return `Был(а) в сети ${lastSeen}`
    }

    return 'Нет в сети'
  }

  render() {
    const { classes, isAdmin, isMe, guest, onClose } = this.props
    return (
      <div className={classes.root}>
        <div>
          <Typography variant="body1">{guest.name}</Typography>
          <Typography color="textSecondary">
            {this.lastSeen(guest)}
          </Typography>
        </div>
        {isAdmin && (
          <Typography
            component="label"
            color="textSecondary"
            variant="caption"
          >
            админ
          </Typography>
        )}
        {isMe && (
          <aside className={classes.actions}>
            <CloseButton onClick={onClose} />
          </aside>
        )}
      </div>
    )
  }
}

GuestItemText.propTypes = {
  classes: object.isRequired,
  isAdmin: bool,
  isMe: bool,
  guest: userShape.isRequired,
  onClose: func.isRequired,
}

export default withStyles(styles)(GuestItemText)
