import React, { Fragment } from 'react'
import { func, bool, arrayOf, object, number } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import PhotosStepper from 'components/PhotosStepper'
import photoShape from 'shapes/photo'
import CloseButton from 'components/CloseButton'
import Modal from '@material-ui/core/Modal'

const styles = {
  root: {
    maxWidth: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  close: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1500,
  },
}

const PhotosModal = ({ classes, index, photos, isOpen, onClose }) =>
  <Fragment>
    <Modal
      className={classes.root}
      open={isOpen}
      onClose={onClose}
    >
      {isOpen ? <PhotosStepper index={index} photos={photos} /> : <div>.</div>}
    </Modal>
    {isOpen && <CloseButton className={classes.close} onClick={onClose} />}
  </Fragment>

PhotosModal.propTypes = {
  classes: object.isRequired,
  index: number,
  photos: arrayOf(photoShape),
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}
export default withStyles(styles)(PhotosModal)
