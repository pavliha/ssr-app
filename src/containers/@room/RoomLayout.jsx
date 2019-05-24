import React from 'react'
import { object } from 'prop-types'
import userShape from 'shapes/user'
import { withStyles } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import { Header } from 'components'
import RoomScene from 'containers/@room/@:id/RoomScene'
import connector from './connector'

const styles = () => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    flexGrow: 1,
    display: 'flex'
  },
})

const RoomLayout = ({ classes, user }) =>
  <div className={classes.root}>
    <Header user={user} />
    <div className={classes.container}>
      <Switch>
        <Route exact path="/room/:id" component={RoomScene} />
      </Switch>
    </div>
  </div>

RoomLayout.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
}

export default withStyles(styles)(connector(RoomLayout))
