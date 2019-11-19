import React, { PureComponent } from 'react'
import { object, arrayOf, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { photoShape } from 'shapes'
import { PhotosModal } from 'components'
import classNames from 'classnames'
import appendFileNameSuffix from 'utils/appendFileNameSuffix'
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'

const styles = theme => ({
  root: {
    display: 'flex',
    overflowX: 'scroll',
    height: 135,
    [theme.breakpoints.up('md')]: {
      height: 265
    }
  },

  photo: {
    height: 120,
    [theme.breakpoints.up('md')]: {
      height: 250
    },
    borderRadius: 5,
    marginRight: 10,
  },
})

class PhotosList extends PureComponent {

  state = {
    index: null
  }

  open = index => () =>
    this.setState({ index })

  close = () => {
    this.setState({ index: null })
  }

  render() {
    const { classes, photos, className } = this.props
    const { index } = this.state

    if (isEmpty(photos)) return null

    return (
      <div className={classNames([classes.root, className])}>
        {photos.map((photo, index) =>
          <img
            key={photo.id}
            alt={photo.url}
            src={appendFileNameSuffix(photo.url, '-slide')}
            onClick={this.open(index)}
            className={classes.photo} />
        )}
        <PhotosModal
          index={index}
          photos={photos}
          isOpen={!isNull(index)}
          onClose={this.close}
        />
      </div>
    )
  }
}

PhotosList.propTypes = {
  classes: object.isRequired,
  className: string,
  photos: arrayOf(photoShape),
}

export default withStyles(styles)(PhotosList)
