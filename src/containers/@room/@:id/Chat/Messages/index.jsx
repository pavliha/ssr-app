import React from 'react'
import { arrayOf, bool, object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import Message from './Message'
import { Loading } from 'components'
import UserCaption from './UserCaption'

const styles = {
  root: {},
  loading: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
  message: {
    width: '100%'
  }
}

let prev_id = null

const displayUserName = (message) => {
  const isNameVisible = message.user_id !== prev_id

  prev_id = message.user_id

  return isNameVisible ? message.user?.name : null
}

const Messages = ({ classes, isLoading, messages }) =>
  <>
    {isLoading && <Loading className={classes.loading} />}
    {messages.map(message => (
      <div className={classes.message} key={message.id}>
        <UserCaption isMine={message.isMine}>
          {Boolean(message.user_id) && displayUserName(message)}
        </UserCaption>
        <Message message={message} />
      </div>
    ))}
  </>

Messages.propTypes = {
  classes: object.isRequired,
  messages: arrayOf(messageShape).isRequired,
  isLoading: bool,
}

export default withStyles(styles)(Messages)
