import React from 'react'
import { arrayOf, object, string, func } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import placeShape from 'shapes/place'
import { PlaceCard } from 'components'
import classNames from 'classnames'

const styles = () => ({
  root: {
  },
})

const PlacesList = ({ classes, className, places, onSelect }) =>
  <div className={classNames([classes.root, className])}>
    {places.map(place =>
      <PlaceCard
        key={place.id}
        place={place}
        onSelect={onSelect}
      />
    )}
  </div>

PlacesList.propTypes = {
  classes: object.isRequired,
  className: string,
  places: arrayOf(placeShape).isRequired,
  onSelect: func,
}

export default withStyles(styles)(PlacesList)
