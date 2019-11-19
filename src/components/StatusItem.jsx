import React from 'react'
import { object, node } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { ListItem, ListItemText } from '@material-ui/core'

const styles = {
  root: {},
  primary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

const StatusItem = ({ classes, primary, secondary }) =>
  <ListItem>
    <ListItemText
      primaryTypographyProps={{ component: 'div', className: classes.primary }}
      primary={primary}
      secondaryTypographyProps={{ component: 'div', className: classes.secondary }}
      secondary={secondary} />
  </ListItem>

StatusItem.propTypes = {
  classes: object.isRequired,
  primary: node,
  secondary: node,
}

export default withStyles(styles)(StatusItem)
