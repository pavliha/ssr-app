import React, { useCallback, useState } from 'react'
import { func, object, shape } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { EntertainmentsLoader, SearchField } from 'components'
import { Helmet } from 'react-helmet'

const styles = theme => ({

  root: {
    maxWidth: 1050,
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
    },
  },

  list: {
    flex: 1,
    paddingTop: 100,
    overflow: 'auto',
    marginBottom: 60,
    [theme.breakpoints.up('md')]: {
      display: 'block',
      marginBottom: 0,
    },
  },

  searchArea: {
    width: '100%',
    backgroundColor: 'white',
    position: 'fixed',
    padding: '15px 10px 0 10px',
    boxSizing: 'border-box',
    right: 0,
    left: 0,
    zIndex: 1,
    height: 60,

  },

  searchField: {
    margin: '0 auto',
    maxWidth: 1015,
  },
})

const EntertainmentsScene = ({ classes, history }) => {
  const [search, setSearch] = useState(null)

  return (
    <section className={classes.root}>
      <Helmet>
        <title>Поиск мест</title>
      </Helmet>
      <div className={classes.searchArea}>
        <SearchField
          className={classes.searchField}
          onChange={useCallback(e => setSearch(e.target.value))}
        />
      </div>
      <div className={classes.list}>
        <EntertainmentsLoader
          search={search}
          onExpand={entertainment => history.push(`/entertainments/${entertainment.id}`)}
          onSelect={place => history.push(`/places/${place.id}`)}
        />
      </div>
    </section>
  )
}

EntertainmentsScene.propTypes = {
  classes: object.isRequired,
  history: shape({ push: func }),
}

export default withStyles(styles)(EntertainmentsScene)
