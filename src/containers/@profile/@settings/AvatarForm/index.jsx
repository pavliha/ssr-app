import React, { Component } from 'react'
import { object, func } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles } from '@material-ui/core'
import AvatarField from './AvatarField'

const styles = {
  root: {},
}

class AvatarForm extends Component {

  state = {
    value: ''
  }

  updateAvatar = (name, avatar_url) => {
    const { onSubmit } = this.props

    onSubmit({ avatar_url })
  }

  render() {
    const { classes, user } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <AvatarField
          name="avatar_url"
          user={user}
          value={value || user.avatar_url}
          onChange={this.updateAvatar}
        />
      </div>
    )
  }
}

AvatarForm.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
  onSubmit: func.isRequired,
}

export default withStyles(styles)(AvatarForm)
