import React, { Component } from 'react'
import { bool, object, func } from 'prop-types'
import { Dialog, DialogActions, DialogTitle, withStyles } from '@material-ui/core'
import Asset from 'api/Asset'
import CancelButton from './CancelButton'
import ConfirmButton from './ConfirmButton'
import DialogPicture from './DialogPicture'

const styles = {
  dialog: {
    maxWidth: 400,
  }
}

class ClipboardImageDialog extends Component {

  state = {
    isLoading: false,
  }

  uploadAttachment = async () => {
    const { file, onClose, onConfirm } = this.props
    this.setState({ isLoading: true })

    try {
      const asset = await Asset.create(file)
      onConfirm(asset)
    } catch (e) {
      onClose()
    } finally {
      this.setState({ isLoading: false })
    }
  }

  render() {
    const { classes, isOpen, file, onClose } = this.props
    const { isLoading } = this.state

    if (!isOpen) return null

    return (
      <Dialog
        classes={{ paper: classes.dialog }}
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogPicture file={file} />
        <DialogActions>
          <CancelButton onClick={onClose} />
          <ConfirmButton
            isLoading={isLoading}
            onClick={this.uploadAttachment}
          />
        </DialogActions>
      </Dialog>
    )
  }
}

ClipboardImageDialog.propTypes = {
  classes: object.isRequired,
  isOpen: bool.isRequired,
  file: object,
  onClose: func.isRequired,
  onConfirm: func.isRequired,
}

ClipboardImageDialog.defaultProps = {
  file: null,
}

export default withStyles(styles)(ClipboardImageDialog)
