import React from 'react'
import { object, func, bool } from 'prop-types'
import userShape from 'shapes/user'
import {
  withStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'

const styles = {
  root: {},
  content: {}
}

const KickGuestDialog = ({ classes, guest, isOpen, onConfirm, onCancel }) =>
  <Dialog className={classes.root} open={isOpen} onClose={onCancel}>
    <DialogTitle>Вы действительно хотите удалить из списка гостей?</DialogTitle>
    <DialogContent className={classes.content}>
      <DialogContentText>
        Пользователь {guest.name} будет удален из списка гостей
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Отмена</Button>
      <Button color="primary" variant="outlined" onClick={onConfirm}>Удалить</Button>
    </DialogActions>
  </Dialog>

KickGuestDialog.propTypes = {
  classes: object.isRequired,
  guest: userShape.isRequired,
  isOpen: bool.isRequired,
  onConfirm: func.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(KickGuestDialog)
