import React from 'react'
import { object, node, } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 20px',
    borderBottom: 'solid 1px rgba(0, 0, 0, 0.12)'
  },
}

const ChatHeader = ({ classes, children }) =>
  <div className={classes.root}>
    {children}
  </div>

ChatHeader.propTypes = {
  classes: object.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(ChatHeader)
