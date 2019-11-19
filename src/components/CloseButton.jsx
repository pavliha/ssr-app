import React from 'react'
import { object, func, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import CloseIcon from 'mdi-react/CloseIcon'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: 5,
    }
  },
})

const CloseButton = ({ classes, color, onClick, className }) =>
  <div className={classNames(classes.root, className)}>
    <IconButton
      aria-label="Close Button"
      color={color}
      onClick={onClick}
    >
      <CloseIcon />
    </IconButton>
  </div>

CloseButton.propTypes = {
  classes: object.isRequired,
  className: string,
  onClick: func,
  color: string,
}

CloseButton.defaultProps = {
  color: 'primary'
}

export default withStyles(styles)(CloseButton)
