import React from 'react'
import { object } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import club from './club.png'
import { OutlineCard } from 'components'
import pizza from './pizza.png'
import mafia from './mafia.png'

const styles = {
  root: {
    position: 'fixed',
    right: 40,
    margin: 10,
    maxWidth: 150,
  },
  title: {
    padding: 10,
  },
  card: {
    marginTop: 10,
  }
}

const Parties = ({ classes }) =>
  <div className={classes.root}>
    <Typography className={classes.title} gutterBottom color="textSecondary">
      рекламные предложения:
    </Typography>
    <OutlineCard className={classes.card}>
      <img alt="club" src={club} width="100%" />
      <Typography>CrowBar</Typography>
    </OutlineCard>
    <OutlineCard className={classes.card}>
      <img alt="club" src={pizza} width="100%" />
      <Typography>Family Hall</Typography>
    </OutlineCard>
    <OutlineCard className={classes.card}>
      <img alt="club" src={mafia} width="100%" />
      <Typography>Mafia Club</Typography>
    </OutlineCard>
  </div>

Parties.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Parties)
