import React from 'react'
import { func, object, string, node } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import placeShape from 'shapes/place'
import { Picture } from 'components'
import classNames from 'classnames'
import appendFileNameSuffix from 'utils/appendFileNameSuffix'

const styles = theme => ({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  picture: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 5,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

  title: {
    fontSize: 16,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
  },
  subtitle: {
    opacity: 0.8,
  },
  price: {
    color: '#07522C',
  }
})

const PlaceTitle = ({ classes, className, place, action, onClick }) =>
  <div className={classNames(classes.root, className)}>
    <Picture
      src={appendFileNameSuffix(place?.picture_url, '-thumbnail')}
      className={classes.picture}
      onClick={onClick}
    />
    <div className={classes.container}>
      <Typography
        component="div"
        gutterBottom
        className={classes.title}
        onClick={onClick}
      >
        {place?.title || 'Выбрать место'}
      </Typography>
      <Typography
        gutterBottom
        variant="caption"
        className={classes.subtitle}
      >
        {place?.price || 'Место еще не выбрано'}
      </Typography>
      <Typography
        gutterBottom
        variant="caption"
        className={classes.subtitle}
      >
        {place?.working_hours}
      </Typography>
      <div>
        {action}
      </div>
    </div>
  </div>

PlaceTitle.propTypes = {
  classes: object.isRequired,
  className: string,
  action: node,
  place: placeShape,
  onClick: func,
}

export default withStyles(styles)(PlaceTitle)
