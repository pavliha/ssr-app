import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { connect, getIn } from 'formik'
import inviteShape from 'shapes/invite'
import { InvitePage } from 'components'

const styles = {
  root: {
    display: 'flex',
    marginBottom: 20,
    zoom: '40%'
  },
}

const getInvite = (invite, values) => ({
  ...invite,
  headline: getIn(values, 'headline'),
  title: getIn(values, 'title'),
  preposition: getIn(values, 'preposition'),
  background_url: getIn(values, 'background_url'),
})

class Preview extends Component {
  preview = (e) => {
    e.preventDefault()

    return false
  }

  render() {
    const { classes, formik, invite } = this.props

    return (
      <div className={classes.root} onClick={this.preview}>
        <InvitePage invite={getInvite(invite, formik.values)} />
      </div>
    )
  }
}

Preview.propTypes = {
  classes: object.isRequired,
  formik: object.isRequired,
  invite: inviteShape,
}

export default withStyles(styles)(connect(Preview))
