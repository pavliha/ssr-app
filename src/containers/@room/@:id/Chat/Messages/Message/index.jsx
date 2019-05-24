import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import { UserAvatar } from 'components'
import classNames from 'classnames'
import Bubble from './Bubble'
import TextMessage from './types/TextMessage'
import PictureMessage from './types/PictureMessage'
import FileMessage from './types/FileMessage'
import PlaceMessage from './types/PlaceMessage'
import NotificationMessage from './types/NotificationMessage'
import DateMessage from './types/DateMessage'
import isPicture from 'utils/isPicture'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5px 15px'
  },
  isMine: {
    flexDirection: 'row-reverse',
  },
  center: {
    justifyContent: 'center',
  }
}

class Message extends Component {

  render() {
    const { classes, message } = this.props

    return (
      <div className={classNames({
        [classes.root]: true,
        [classes.isMine]: message.isMine,
        [classes.center]: !message.user_id
      })}>
        {message.user && !message.isMine && <UserAvatar user={message.user} />}
        <Bubble isMine={message.isMine}>
          {(() => {
            if (!message.user_id) {
              return <NotificationMessage message={message} />
            }

            if (message.date) {
              return <DateMessage message={message} />
            }

            if (isPicture(message.asset?.url)) {
              return <PictureMessage message={message} />
            }

            if (message.asset_id) {
              return <FileMessage message={message} />
            }

            if (message.place_id) {
              return <PlaceMessage message={message} />
            }

            return <TextMessage message={message} />
          })()}

        </Bubble>
      </div>
    )
  }
}

Message.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired,
}

export default withStyles(styles)(Message)
