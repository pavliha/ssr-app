import React, { Component } from 'react'
import classNames from 'classnames'
import { object, string } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { IconButton } from '@material-ui/core'
import ShareIcon from 'mdi-react/ShareVariantIcon'
import placeShape from 'shapes/place'
import { FRONTEND_URL } from 'config/app'

const styles = theme => ({
  root: {
    marginRight: 0,
    [theme.breakpoints.up('md')]: {
      marginRight: 5,
    }
  },
})

class SharePlaceButton extends Component {

  shareApi = () => {
    const { place } = this.props
    navigator.share({ url: `${FRONTEND_URL}/place/${place.id}` })
  }

  render() {
    const { classes, className } = this.props

    if (!navigator.share) return null

    return (
      <div className={classNames(classes.root, className)}>
        <IconButton
          aria-label="Share Button"
          color="inherit"
          onClick={this.shareApi}
        >
          <ShareIcon />
        </IconButton>
      </div>
    )
  }
}

SharePlaceButton.propTypes = {
  classes: object.isRequired,
  place: placeShape.isRequired,
  className: string,
}

export default withStyles(styles)(SharePlaceButton)
