import React from 'react'
import { object, shape, number } from 'prop-types'
import { StatusItem } from 'components/index'
import { formatCount } from 'utils/index'

const PlayersStatusItem = ({ classes, players: { min, max } }) => {

  const format = formatCount({
    few: 'участников',
    one: 'участника',
    two: 'участников'
  })

  if (min && max) {
    return (
      <StatusItem
        classes={classes}
        primary={`от ${min} до ${max}`}
        secondary="участников"
      />
    )
  }

  if (min) {
    return (
      <StatusItem
        classes={classes}
        primary={` от ${min}`}
        secondary={format(min)}
      />
    )
  }

  if (max) {
    return (
      <StatusItem
        classes={classes}
        primary={`до ${max}`}
        secondary={format(max)}
      />
    )
  }

  return null
}

PlayersStatusItem.propTypes = {
  classes: object,
  players: shape({ min: number, max: number })
}

export default PlayersStatusItem
