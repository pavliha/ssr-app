import React from 'react'
import { object } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import sparks from './sparks.png'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    position: 'relative',
    background: `url(${sparks}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
      position: 'absolute',
      background: 'black',
      width: '100%',
      height: '100%',
      content: `' '`,
      opacity: '0.1',
      zIndex: 2,
      animation: 'hide 2s',
    },
    '&::after': {
      position: 'absolute',
      background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)',
      borderRadius: '100%',
      width: '100%',
      height: '100%',
      content: `' '`,
    }
  },
  container: {
    zIndex: 10
  },
  started: {
    marginLeft: '-200px'
  },
  with: {
    marginLeft: '100px'
  },

  button: {
    borderRadius: '30px',
    minWidth: '250px'
  },

  action: {
    marginTop: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

}

const Banner = ({ classes }) =>
  <section className={classes.root}>
    <div className={classes.container}>
      <Typography className={classes.started} gutterBottom color="secondary" variant="h3">
        Lets get party started
      </Typography>
      <Typography className={classes.with} gutterBottom color="secondary" variant="h4">
        with
      </Typography>
      <Typography gutterBottom color="secondary" variant="h1">
        PARTYMAKER!
      </Typography>

      <div className={classes.action}>
        <Link to="/auth/login">
          <Button variant="outlined" color="secondary" size="large" className={classes.button}>
            Начать
          </Button>
        </Link>
      </div>
    </div>
  </section>

Banner.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(Banner)
