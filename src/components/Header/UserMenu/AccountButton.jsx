import React from 'react'
import { object, shape, string, oneOfType, bool, number } from 'prop-types'
import { IconButton, withStyles } from '@material-ui/core'
import { UserAvatar } from 'components'

const styles = (theme) => ({
  icon: {
    color: theme.palette.secondary.main
  },
})

const AccountButton = ({ classes, user }) =>
  <IconButton className={classes.root}>
    <UserAvatar small user={user} />
  </IconButton>

AccountButton.propTypes = {
  classes: object.isRequired,
  user: shape({
    avatar_url: string,
    name: string,
    is_online: oneOfType([bool, number]),
  }).isRequired,
}

export default withStyles(styles)(AccountButton)
