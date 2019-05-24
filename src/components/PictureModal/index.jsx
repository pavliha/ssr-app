import React from 'react'
import { object, func, bool, string } from 'prop-types'
import { withStyles, Dialog } from '@material-ui/core'

const styles = {
  root: {
    maxWidth: '100%',
    backgroundImage: `url(/images/transparent-background.svg)`,
  },
}

const PictureModal = ({ classes, url, isOpen, onClose }) =>
  <Dialog
    open={isOpen}
    classes={{ paperWidthSm: classes.root }}
    onClose={onClose}
  >
    <img alt={url} src={url} width="100%" height="100%" onClick={onClose} />
  </Dialog>

PictureModal.propTypes = {
  classes: object.isRequired,
  url: string.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
}
export default withStyles(styles)(PictureModal)
