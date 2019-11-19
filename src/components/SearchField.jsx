import React, { PureComponent } from 'react'
import { object, func, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconButton, InputBase, Divider, Paper, Typography, ClickAwayListener } from '@material-ui/core'
import SearchIcon from 'mdi-react/SearchIcon'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    height: 60,
    paddingRight: 5,
  },
  input: {
    backgroundColor: 'transparent',
    marginLeft: theme.spacing(1),
    flex: 1,
    display: 'none',
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },

  title: {
    fontFamily: 'Google Sans, Arial, sans-serif',
    color: theme.palette.primary.main,
  },

  city: {
    fontFamily: 'Google Sans, Arial, sans-serif',
    fontWeight: '100',
    paddingLeft: '15px',
  },

  logo: {
    cursor: 'pointer',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    margin: '0 15px',
  },

  inputFocused: {
    display: 'block',
  },

  logoFocused: {
    display: 'none'
  }
})

class SearchField extends PureComponent {

  input = React.createRef()

  state = {
    isFocused: false,
    value: ''
  }

  focus = () => {
    this.setState({ isFocused: true }, () => {
      this.input.current.focus()
    })
  }

  change = (e) => {
    const { onChange } = this.props
    onChange(e)
    this.setState({ value: e.target.value })
  }

  blur = () =>
    this.setState({ isFocused: false })

  render() {
    const { classes, className } = this.props
    const { isFocused, value } = this.state

    const inputStyle = classNames({ [classes.input]: true, [classes.inputFocused]: isFocused || value })
    const logoStyle = classNames({ [classes.logo]: true, [classes.logoFocused]: isFocused || value })

    return (
      <ClickAwayListener onClickAway={this.blur}>
        <Paper className={classNames([classes.root, className])} onClick={this.focus}>
          <InputBase
            className={inputStyle}
            placeholder="Искать развлечения"
            inputProps={{
              ref: this.input,
              'aria-label': 'Искать развлечения'
            }}
            onChange={this.change}
            onBlur={this.blur}
          />
          <div className={logoStyle}>
            <Typography className={classes.title} variant="h6" color="inherit">
              Partymaker
            </Typography>
            <Typography className={classes.city}>Запорожье</Typography>
          </div>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton aria-label="Search" color="primary" className={classes.iconButton}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </ClickAwayListener>
    )
  }
}

SearchField.propTypes = {
  classes: object.isRequired,
  className: string,
  onChange: func,
}

export default withStyles(styles)(SearchField)
