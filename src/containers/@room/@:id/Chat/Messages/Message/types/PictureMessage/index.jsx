import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import { PictureModal } from 'components'
import StatusCaption from '../StatusCaption'

const styles = {

  root: {
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
    width: 300,
    height: 300,
    backgroundImage: `url(/images/transparent-background.svg)`,
    backgroundSize: 'cover',
    borderRadius: 20,
  },

  picture: {
    padding: 15,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    borderRadius: 20,
  },
}

class PictureMessage extends Component {
  state = {
    isPictureModalOpen: false
  }

  openPictureModal = () => {
    this.setState({ isPictureModalOpen: true, })
  }

  closePictureModal = () => {
    this.setState({ isPictureModalOpen: false, })
  }

  render() {
    const { classes, message } = this.props
    const { isPictureModalOpen } = this.state

    return (
      <>
        <div className={classes.root}>
          <div
            onClick={this.openPictureModal}
            className={classes.picture}
            style={{ backgroundImage: `url(${message.asset.url})` }}
          />
          <PictureModal
            url={message.asset.url}
            isOpen={isPictureModalOpen}
            onClose={this.closePictureModal}
          />

        </div>
        <StatusCaption message={message} />
      </>

    )
  }
}

PictureMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}

export default withStyles(styles)(PictureMessage)
