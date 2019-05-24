import React, { Component } from 'react'
import { func, object, shape } from 'prop-types'
import userShape from 'shapes/user'
import { Button, Typography, withStyles } from '@material-ui/core'
import { UserAvatar } from 'components'
import connector from './connector'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  actions: {
    marginTop: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 250,
  }
}

class ProfileScene extends Component {
  constructor(props) {
    super(props)
    const { actions } = props

    actions.auth.user.account.load()
  }

  render() {
    const { classes, user, } = this.props
    return (
      <div className={classes.root}>
        <UserAvatar clickable className={classes.avatar} user={user} />
        <Typography gutterBottom variant="h5">{user.name}</Typography>
        <Typography gutterBottom color="textSecondary">{user.email}</Typography>
        <Typography gutterBottom color="textSecondary">{user.phone}</Typography>
        <div className={classes.actions}>
          <Link to="/profile/settings">
            <Button variant="contained" color="primary">
              Настройки
            </Button>
          </Link>
          <Link to="/auth/logout">
            <Button variant="outlined">
              Выйти
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

ProfileScene.propTypes = {
  user: userShape.isRequired,
  classes: object.isRequired,
  actions: shape({
    auth: shape({
      user: shape({
        account: shape({
          load: func.isRequired,
        }),
      }),
    })
  })
}

export default withStyles(styles)(connector(ProfileScene))
