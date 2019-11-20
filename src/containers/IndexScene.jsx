import React from 'react'
import { withStyles } from '@material-ui/styles'
const styles = {
  root: {
    padding: 30,
  },
}

const IndexScene = ({ classes }) =>
  <div className={classes.root}>
    hello
  </div>

export default withStyles(styles)(IndexScene)
