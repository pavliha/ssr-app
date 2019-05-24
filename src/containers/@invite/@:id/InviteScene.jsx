import React, { Component } from 'react'
import { object, shape, func, string } from 'prop-types'
import { withStyles } from '@material-ui/core'
import { NotFound, InvitePage, Loading } from 'components'
import inviteShape from 'shapes/invite'
import userShape from 'shapes/user'
import connector from './connector'
import Storage from 'services/Storage'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  actions: {
    marginTop: 150,
  }
}

class InviteScene extends Component {

  state = {
    isLoading: false
  }

  componentWillMount() {
    this.load().catch(console.error)
  }

  load = async () => {
    const { actions, match } = this.props
    this.setState({ isLoading: true })
    await actions.loadInviteByToken(match.params.token)
    this.setState({ isLoading: false })
  }

  acceptInvite = async (token) => {
    const { actions, user, history, location } = this.props

    Storage.put({
      previous_user_location: location.pathname
    })

    if (!user) {
      window.location.replace('/auth/login')
    } else {
      const { value: room } = await actions.acceptInvite(user.id, token)
      history.push(`/room/${room.id}`)
    }
  }

  render() {
    const { classes, invite, user } = this.props
    const { isLoading } = this.state

    if (isLoading) return <Loading />

    if (!invite) return <NotFound />

    return (
      <div className={classes.root}>
        <InvitePage
          user={user}
          invite={invite}
          onAccept={this.acceptInvite}
        />
      </div>
    )
  }
}

InviteScene.propTypes = {
  classes: object.isRequired,
  invite: inviteShape,
  history: shape({
    push: func.isRequired,
  }),
  location: shape({
    pathname: string,
  }),
  match: shape({
    params: shape({
      token: string,
    })
  }).isRequired,
  user: userShape,
  actions: shape({
    loadInviteByToken: func.isRequired,
    acceptInvite: func.isRequired,
  })
}

export default withStyles(styles)(connector(InviteScene))
