import React from 'react'
import { object, shape, string } from 'prop-types'
import { Place, PlaceActions, PlaceLoader } from 'components'
import { Helmet } from 'react-helmet'
import placeShape from 'shapes/place'
import { withStyles } from '@material-ui/styles'
import { connect, select } from 'src/redux'

const styles = theme => ({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    marginBottom: 60,
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
    },
  },
})

const PlaceScene = ({ match, classes, redux: { place } }) =>
  <div className={classes.root}>
    <div className={classes.container}>
      <PlaceLoader id={match.params.id}>
        {place && <Helmet><title>{place.title}</title></Helmet>}
        {place && <Place place={place} actions={<PlaceActions phone={place.contacts?.phone} />} />}
      </PlaceLoader>
    </div>
  </div>

PlaceScene.propTypes = {
  classes: object.isRequired,
  match: shape({ params: shape({ id: string }) }),
  redux: shape({
    place: placeShape,
  }),
}

const redux = (state, { match }) => ({
  place: select.places.current(state, match.params.id),
})

export default withStyles(styles)(connect(redux)(PlaceScene))
