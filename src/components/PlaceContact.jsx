import React, { Fragment } from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    opacity: 0.8,
  },
  icon: {
    marginRight: 15,
    marginLeft: 5,
  },
  label: {
    wordBreak: 'break-word',
  },
}

const PlaceContact = ({ classes, link, icon: Icon, label }) => {

  const content = (
    <Fragment>
      <Icon className={classes.icon} />
      <div className={classes.label}>{label}</div>
    </Fragment>
  )

  return link
    ? <a className={classes.root} target="_blank" href={link}>{content}</a>
    : <div className={classes.root}>{content}</div>
}

PlaceContact.propTypes = {
  classes: object.isRequired,
  icon: object,
  label: string,
  link: string
}

export default withStyles(styles)(PlaceContact)
