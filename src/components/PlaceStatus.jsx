import React from 'react'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { placeShape } from 'shapes'
import { PlayersStatusItem, RatingStatusItem, StatusItem } from 'components'
import classNames from 'classnames'

const styles = {
  root: {
    display: 'flex',
  },
}

const PlaceStatus = ({ classes, className, place }) =>
  <div className={classNames([classes.status, className])}>
    {Boolean(place.rating_count) && (
      <RatingStatusItem rating={place.rating} rating_count={place.rating_count} />
    )}
    {Boolean(place.age) && (
      <StatusItem
        primary={`${place.age}+`}
        secondary="возраст"
      />
    )}
    <PlayersStatusItem players={{ min: place.players_min, max: place.players_max }} />
    {Boolean(place.order_count) && (
      <StatusItem
        primary={place.order_count}
        secondary="заказов"
      />
    )}
  </div>

PlaceStatus.propTypes = {
  classes: object.isRequired,
  className: string,
  place: placeShape
}

export default withStyles(styles)(PlaceStatus)
