import React, { useCallback } from 'react'
import { object, func, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconButton, Typography } from '@material-ui/core'
import KeyboardArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { entertainmentShape } from 'shapes'
import { PlacesList } from 'components'
import Fuse from 'fuse.js'
import isEmpty from 'lodash/isEmpty'

const styles = theme => ({
  root: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    marginBottom: 15,
  },

  expand: {
    display: 'flex',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      paddingLeft: 0,
    }
  },

  title: {
    cursor: 'pointer',
    fontSize: 18,
    fontFamily: 'Google Sans, Arial, sans-serif',
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
  },

  places: {
    display: 'flex',
    overflow: 'auto',
    justifyContent: 'center',
    padding: '0 10px',
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'flex-start',
      padding: 0,
    }
  }

})

const options = {
  keys: ['title']
}

const Entertainment = ({ classes, entertainment, search, onSelect, onExpand }) => {

  const fuse = new Fuse(entertainment.places, options)
  const results = fuse.search(search || '')
  const array = isEmpty(results) ? entertainment.places : results

  return (
    <div className={classes.root}>
      <div className={classes.expand} onClick={useCallback(() => onExpand(entertainment))}>
        <Typography component="div" className={classes.title}>
          {entertainment.title}
        </Typography>
        <IconButton aria-label="Arrow Right">
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
      {entertainment.places && (
        <PlacesList
          className={classes.places}
          places={array}
          onSelect={onSelect}
        />
      )}
    </div>
  )
}

Entertainment.propTypes = {
  classes: object.isRequired,
  search: string,
  entertainment: entertainmentShape.isRequired,
  onSelect: func,
  onExpand: func,
}

export default withStyles(styles)(Entertainment)
