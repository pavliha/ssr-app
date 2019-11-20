import React from 'react'
import { withRouter } from 'react-router-dom'
import { object, shape, string, func } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from 'mdi-react/ArrowBackIcon'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: 5,
    }
  },
})

const BackButton = ({ classes, className, history, onClick }) =>
  <div className={classNames(classes.root, className)}>
    <IconButton
      aria-label="Arrow Back"
      color="inherit"
      onClick={onClick || history.goBack}
    >
      <ArrowBackIcon />
    </IconButton>
  </div>

BackButton.propTypes = {
  history: shape({ goBack: func }),
  classes: object.isRequired,
  className: string,
  onClick: func,
}

export default withStyles(styles)(withRouter(BackButton))
