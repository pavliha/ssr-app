import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconButton, SvgIcon } from '@material-ui/core'
import LogoIcon from 'assets/images/logo-filled.svg'

const styles = {
  root: {},
  logoIcon: {
    color: 'white',
  }
}

const LogoButton = ({ classes }) =>
  <IconButton className={classes.root} aria-label="Logo">
    <SvgIcon>
      <LogoIcon className={classes.logoIcon} />
    </SvgIcon>
  </IconButton>

LogoButton.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(LogoButton)
