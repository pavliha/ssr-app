import React, { useCallback } from 'react'
import { func, object, shape } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { entertainmentShape } from 'shapes'
import { BackButton, Loader, PlacesList } from 'components'
import { actions, connect, select } from 'src/redux'
import { Helmet } from 'react-helmet'

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      width: 1050,
    },
  },

  header: {
    padding: '0 10px',
    height: 60,
    display: 'flex',
    alignItems: 'center',
  },

  places: {
    flex: 1,
    paddingTop: 35,
    overflow: 'auto',
    display: 'inline-block',
    [theme.breakpoints.up('xs')]: {
      paddingLeft: 30,
    },
  },
  title: {
    paddingLeft: 5,
    fontSize: 20,
  },

  heading: {
    marginLeft: 20,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },

})

const EntertainmentScene = ({ classes, history, redux: { entertainment, loadEntertainment } }) =>
  <section className={classes.root}>
    <Helmet>
      {entertainment && <title>Partymaker - {entertainment.title}</title>}
    </Helmet>
    <Loader load={loadEntertainment}>
      <div className={classes.heading}>
        <BackButton />
        <Typography component="div" className={classes.title}>
          {entertainment?.title}
        </Typography>
      </div>
      <PlacesList
        className={classes.places}
        places={entertainment?.places || []}
        onSelect={useCallback(place => history.push(`/places/${place.id}`))}
      />
    </Loader>
  </section>

EntertainmentScene.propTypes = {
  classes: object.isRequired,
  history: shape({ push: func }),
  redux: shape({
    entertainment: entertainmentShape,
    loadEntertainment: func,
  }),
}

const redux = (state, { match: { params: { id } } }) => ({
  entertainment: select.entertainments.current(state, id),
  loadEntertainment: () => actions.entertainments.load(id),
})

export default withStyles(styles)(connect(redux)(EntertainmentScene))
