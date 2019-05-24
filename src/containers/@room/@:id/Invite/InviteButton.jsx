import React from 'react'
import { func } from 'prop-types'
import { IconButton, SvgIcon, withStyles } from '@material-ui/core'
import PersonAddIcon from 'mdi-react/PersonAddIcon'

const styles = {
  root: {},
}

const InviteButton = ({ onClick }) =>
  <IconButton onClick={onClick}>
    <SvgIcon color="primary">
      <PersonAddIcon />
    </SvgIcon>
  </IconButton>

InviteButton.propTypes = {
  onClick: func.isRequired
}

export default withStyles(styles)(InviteButton)
