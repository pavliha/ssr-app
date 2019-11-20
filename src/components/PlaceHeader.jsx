import React from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { BackButton, PlaceCard, SharePlaceButton } from 'components'
import placeShape from 'shapes/place'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingRight: 5,
    paddingLeft: 5,
  },

  card: {
    fontFamily: 'Google Sans, Arial, sans-serif',
    paddingRight: 5,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
  }
}

const PlaceHeader = ({ classes, place }) =>
  <div className={classes.root}>
    <div className={classes.container}>
      <BackButton />
      <PlaceCard
        className={classes.card}
        inline
        place={place}
      />
    </div>
    <SharePlaceButton place={place} />
  </div>

PlaceHeader.propTypes = {
  classes: object.isRequired,
  place: placeShape.isRequired,
}

export default withStyles(styles)(PlaceHeader)
