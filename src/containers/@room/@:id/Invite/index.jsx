import React, { Component } from 'react'
import { func, object } from 'prop-types'
import inviteShape from 'shapes/invite'
import { withStyles } from '@material-ui/core'
import InviteDrawer from './InviteDrawer'
import InviteForm from './InviteForm'
import InviteButton from './InviteButton'

const styles = {
  root: {},
}

class Invite extends Component {

  state = {
    isLoading: false,
    isDrawerOpen: false
  }

  load = async () => {
    const { onLoad } = this.props
    this.setState({ isLoading: true })
    const result = await onLoad()
    this.setState({ isLoading: false })
    return result
  }

  open = () => {
    this.setState({ isDrawerOpen: true })
    this.load().catch(console.error)
  }

  close = () => {
    this.setState({ isDrawerOpen: false })
  }

  handleSubmit = (form) => {
    const { invite, onUpdate, onCreate } = this.props
    if (!invite) return onCreate(form)
    return onUpdate(form)
  }

  render() {
    const { classes, invite } = this.props
    const { isDrawerOpen } = this.state

    return (
      <div className={classes.root}>
        <InviteButton onClick={this.open} />
        <InviteDrawer
          isOpen={isDrawerOpen}
          onClose={this.close}
        >
          <InviteForm
            invite={invite}
            onSubmit={this.handleSubmit}
            onCancel={this.close}
          />
        </InviteDrawer>
      </div>
    )
  }
}

Invite.propTypes = {
  invite: inviteShape,
  classes: object.isRequired,
  onLoad: func.isRequired,
  onCreate: func.isRequired,
  onUpdate: func.isRequired,
}

export default withStyles(styles)(Invite)
