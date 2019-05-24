import React, { Component } from 'react'
import { object, shape, string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AccountButton from './AccountButton'

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
})

class UserMenu extends Component {

  render() {
    const { classes, user } = this.props

    return (
      <Link to="/profile">
        <div className={classes.root}>
          <Typography variant="subtitle1" color="secondary">{user.name}</Typography><AccountButton user={user} />
        </div>
      </Link>
    )
  }
}

UserMenu.propTypes = {
  classes: object.isRequired,
  user: shape({
    name: string.isRequired,
    avatar_url: string.isRequired,
  }),
}

UserMenu.defaultProps = {
  user: null,
}

export default withStyles(styles)(UserMenu)
