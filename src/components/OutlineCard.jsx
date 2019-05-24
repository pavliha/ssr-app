import React from 'react'
import { object, node, string } from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'
import classNames from 'classnames'

const styles = {
  root: {
    position: 'relative',
    padding: 6,
    borderRadius: 3,
    border: 'solid 1px rgba(0, 0, 0, 0.12)',
  },
  title: {
    position: 'absolute',
    top: -15,
    left: 15,
    background: '#fafafa',
    padding: 5,
  }
}

const OutlineCard = ({ classes, className, title, children, style }) =>
  <div className={classNames([classes.root, className])} style={style}>
    {title && (
      <Typography
        color="textSecondary"
        variant="caption"
        className={classes.title}
      >
        {title}
      </Typography>
    )}
    {children}
  </div>

OutlineCard.propTypes = {
  classes: object.isRequired,
  className: string,
  style: object,
  title: string,
  children: node,
}

export default withStyles(styles)(OutlineCard)
