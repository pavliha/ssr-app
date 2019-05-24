import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'

const styles = theme => ({
  root: {
    padding: '5px 15px',
    display: 'flex',
    borderRadius: 15,
    alignItems: 'flex-end',
    color: theme.palette.secondary.main,
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
    background: 'rgba(0,0,0,0.3)'
  },
  text: {
    fontSize: 12,
  },
})

const NotificationMessage = ({ classes, message }) => {

  if (!message.text) return null

  return (
    <div className={classes.root}>
      <Typography color="inherit" className={classes.text}>{message.text}</Typography> {' '}
    </div>
  )
}
NotificationMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}
// const isEqual = (prev, next) => {
//   return prev.message.text === next.message.text
// }

export default withStyles(styles)(NotificationMessage)
