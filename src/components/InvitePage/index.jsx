import React from 'react'
import { object, string, shape, func } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Header } from 'components'
import moment from 'moment'

const styles = {
  root: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    textShadow: '0 3px 6px #000000',
    backgroundSize: 'cover',
    minHeight: 938,
    '&::before': {
      position: 'absolute',
      background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)',
      borderRadius: '100%',
      width: '100%',
      height: '100%',
      content: `' '`,
    }
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  datetime: {
    marginTop: 15,
  },
  actions: {
    marginTop: 150,
  },
  button: {
    borderRadius: '30px',
    minWidth: '250px'
  },
}

const InvitePage = ({ classes, invite, onAccept }) => {
  return <section className={classes.root} style={{ backgroundImage: `url(${invite.background_url})` }}>
    <div className={classes.container}>
      <Header isTransparent />
      <Typography
        color="secondary"
        gutterBottom
        align="center"
        variant="h3"
      >
        {invite.headline}
      </Typography>
      <Typography
        color="secondary"
        align="center"
        variant="h4"
      >
        {invite.preposition}
      </Typography>
      <Typography
        color="secondary"
        align="center"
        gutterBottom
        variant="h1"
      >
        {invite.title}
      </Typography>
      <Typography
        color="secondary"
        gutterBottom
        className={classes.datetime}
        align="center"
        variant="h5"
      >
        {invite.room?.date && `${moment(invite.room.date).format('D MMMM, dddd')},`} {invite.room?.time}
      </Typography>
      <Typography
        color="secondary"
        align="center"
        variant="h4"
      >
        {invite.room?.place?.address}
      </Typography>
      <div className={classes.actions}>
        <Link to={`/invite/${invite.token}`}>
          <Button
            onClick={() => onAccept(invite.token)}
            className={classes.button}
            size="large"
            variant="outlined"
            color="secondary"
          >
            Принимаю приглашение
          </Button>
        </Link>
      </div>
    </div>
  </section>
}

InvitePage.propTypes = {
  classes: object.isRequired,
  invite: shape({
    headline: string.isRequired,
    preposition: string,
    title: string.isRequired,
    background_url: string.isRequired,
    token: string,
  }),
  onAccept: func,
}

InvitePage.defaultProps = {
  onAccept: () => {}
}

export default withStyles(styles)(InvitePage)
