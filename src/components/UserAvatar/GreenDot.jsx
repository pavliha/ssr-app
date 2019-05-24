import React from 'react'
import { object, bool, oneOfType, number } from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = () => ({
  root: {
    position: 'absolute',
    borderRadius: '100%',
    bottom: 1,
    right: 1,
    width: 10,
    height: 10,
    background: '#2dc24a',
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
  },
})

const GreenDot = ({ classes, is_online }) => {

  if (!is_online) return null

  return <div className={classes.root} />
}

GreenDot.propTypes = {
  classes: object.isRequired,
  is_online: oneOfType([bool, number]),
}

export default withStyles(styles)(GreenDot)
