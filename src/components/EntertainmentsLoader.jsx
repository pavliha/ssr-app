import React from 'react'
import { array, func, shape, string } from 'prop-types'
import { actions, connect, select } from 'src/redux'
import isEmpty from 'lodash/isEmpty'
import Fuse from 'fuse.js'
import Loader from 'components/Loader'
import Entertainment from 'components/Entertainment'

const options = {
  keys: ['title', 'places.title'],
}

const EntertainmentsLoader = ({ onSelect, onExpand, onLoad, search, redux: { entertainments, loadEntertainments } }) => {
  const fuse = new Fuse(entertainments, options)
  const results = fuse.search(search || '')
  const array = isEmpty(results) ? entertainments : results

  return (
    <Loader load={loadEntertainments} onLoad={onLoad}>
      {array
        .filter(e => !isEmpty(e.places))
        .map(entertainment =>
          <Entertainment
            key={entertainment.id}
            search={search}
            entertainment={entertainment}
            onExpand={onExpand}
            onSelect={onSelect}
          />,
        )}
    </Loader>
  )
}

EntertainmentsLoader.propTypes = {
  search: string,
  onLoad: func,
  onSelect: func,
  onExpand: func.isRequired,
  redux: shape({
    entertainments: array,
    loadEntertainments: func.isRequired,
  }),
}

const redux = state => ({
  entertainments: select.entertainments.all(state),
  loadEntertainments: actions.entertainments.loadMany,
})

export default connect(redux)(EntertainmentsLoader)
