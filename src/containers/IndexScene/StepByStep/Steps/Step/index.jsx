import React from 'react'
import { object, string, number, node } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import NumberIcon from './NumberIcon'

const styles = {
  root: {
    margin: '25px 0',
    maxWidth: 380,
    display: 'flex',
    alignItems: 'center',
    padding: '17px 25px 17px 0',
    borderBottom: 'solid 1px rgba(112, 112, 112, 0.1)',
  },
  text: {
    paddingLeft: 20,
  }
}

const Step = ({ classes, number, title, children }) =>
  <div className={classes.root}>
    <NumberIcon number={number} />
    <div className={classes.text}>
      <Typography gutterBottom variant="h5">{title}</Typography>
      <Typography variant="body1">{children}</Typography>
    </div>
  </div>

Step.propTypes = {
  classes: object.isRequired,
  title: string.isRequired,
  number: number.isRequired,
  children: node.isRequired,
}

export default withStyles(styles)(Step)
