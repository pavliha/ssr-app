import React from 'react'
import { object } from 'prop-types'
import { withStyles, SvgIcon, Typography } from '@material-ui/core'
import FacebookIcon from './facebook.svg'
import InstagramIcon from './instagram.svg'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: '70px 0'
  },
  icon: {
    fontSize: 46,
    marginRight: 20,
    opacity: 0.8,
    color: theme.palette.primary.main
  },
})

const Footer = ({ classes }) =>
  <footer className={classes.root}>
    <SvgIcon className={classes.icon}><FacebookIcon /></SvgIcon>
    <SvgIcon className={classes.icon}><InstagramIcon /></SvgIcon>
    <div>
      <Typography variant="body1">Partymaker</Typography>
      <Typography color="textSecondary" variant="body2">Let's get party started</Typography>
    </div>
  </footer>

Footer.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Footer)
