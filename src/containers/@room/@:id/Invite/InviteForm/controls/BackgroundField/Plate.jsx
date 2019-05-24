import React from 'react'
import { object, string, bool, func } from 'prop-types'
import { withStyles } from '@material-ui/core'
import classNames from 'classnames'

const styles = theme => ({
  root: {
    width: 180,
    height: 180,
    margin: 5,
    backgroundSize: 'cover',
    borderRadius: 3,
  },
  selected: {
    border: `3px ${theme.palette.primary.main} solid`,
  }
})

const Plate = ({ classes, url, isSelected, onClick }) => {

  return <div
    style={{ backgroundImage: `url(${url})`, }}
    className={classNames({
      [classes.root]: true,
      [classes.selected]: isSelected
    })}
    onClick={onClick}
  />
}

Plate.propTypes = {
  classes: object.isRequired,
  url: string.isRequired,
  isSelected: bool.isRequired,
  onClick: func.isRequired,
}

export default withStyles(styles)(Plate)
