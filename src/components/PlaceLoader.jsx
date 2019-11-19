import React from 'react'
import { func, node, number, oneOfType, shape, string } from 'prop-types'
import placeShape from 'shapes/place'
import { Loader } from 'components'
import { actions, connect, select } from 'src/redux'

const PlaceLoader = ({ id, children, redux: { place, loadPlace } }) =>
  <Loader params={id} load={loadPlace}>
    {place && children}
  </Loader>

PlaceLoader.propTypes = {
  id: oneOfType([string, number]).isRequired,
  children: node,
  redux: shape({
    place: placeShape,
    loadPlace: func.isRequired,
  })
}

const redux = (state, { id }) => ({
  place: select.places.current(state, id),
  loadPlace: actions.places.load,
})

export default connect(redux)(PlaceLoader)
