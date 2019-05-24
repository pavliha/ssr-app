import React from 'react'
import { object, bool, string } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles, AppBar, Toolbar, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import Navigation from './Navigation'
import UserMenu from './UserMenu'
import classNames from 'classnames'

const styles = {
  root: {},

  transparent: {
    position: 'absolute',
    background: 'transparent',
    boxShadow: 'none',
    top: 0,
  },
}

const Header = ({ classes, className, user, isTransparent }) =>
  <AppBar
    position="static"
    color="primary"
    className={classNames({
      [classes.root]: true,
      [classes.transparent]: isTransparent,
      [className]: true,
    })}
  >
    <Toolbar>
      <Link to="/"><Logo /></Link>
      <Navigation>
        {user && <Link to="/home"><Button color="secondary">мои события</Button></Link>}
      </Navigation>
      {user
        ? <UserMenu user={user} />
        : <>
          <Link to="/auth/login">
            <Button color="secondary">войти</Button>
          </Link>
          <Link to="/auth/register">
            <Button color="secondary">регистрация</Button>
          </Link>
        </>
      }

    </Toolbar>
  </AppBar>

Header.propTypes = {
  classes: object.isRequired,
  className: string,
  isTransparent: bool,
  user: userShape,
}

Header.defaultProps = {
  user: null,
}

export default withStyles(styles)(Header)
