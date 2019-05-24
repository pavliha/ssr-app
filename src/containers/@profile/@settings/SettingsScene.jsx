import React, { Component } from 'react'
import { object, shape, func } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles } from '@material-ui/core'
import { OutlineCard } from 'components'
import ContactForm from './ContactForm'
import UserForm from './UserForm'
import PasswordForm from './PasswordForm'
import AvatarForm from './AvatarForm'
import connector from './connector'

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  card: {
    width: 450,
    marginBottom: 30,
  },

}

class SettingsScene extends Component {

  componentDidMount() {
    const { actions } = this.props

    actions.auth.user.account.load()
  }

  render() {
    const { classes, user, actions } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <AvatarForm user={user} onSubmit={actions.auth.user.update} />
          <OutlineCard className={classes.card} title="Общее">
            <UserForm user={user} onSubmit={actions.auth.user.update} />
          </OutlineCard>
          <OutlineCard className={classes.card} title="Контакты">
            <ContactForm account={user.account} onSubmit={actions.auth.user.account.update} />
          </OutlineCard>
          <OutlineCard className={classes.card} title="Пароль">
            <PasswordForm onSubmit={actions.auth.password.update} />
          </OutlineCard>
        </div>
      </div>
    )
  }
}

SettingsScene.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
  actions: shape({
    auth: shape({
      user: shape({
        account: shape({
          load: func.isRequired,
          update: func.isRequired,
        }),
        update: func.isRequired,
      }),
      password: shape({
        update: func.isRequired,
      })
    })
  })
}

export default withStyles(styles)(connector(SettingsScene))
