import React from 'react'
import { object, func, bool } from 'prop-types'
import placeShape from 'shapes/place'
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

const PlaceDialog = ({ classes, place, isOpen, onConfirm, onCancel }) =>
  <Dialog className={classes.root} open={isOpen} onClose={onCancel}>
    <DialogTitle>Изменить текушее место на предложеное?</DialogTitle>
    <DialogContent className={classes.content}>
      <DialogContentText>
        Предложеное место: {place.title} будет установлено как основное
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Отмена</Button>
      <Button color="primary" variant="outlined" onClick={onConfirm}>Установить</Button>
    </DialogActions>
  </Dialog>

PlaceDialog.propTypes = {
  classes: object.isRequired,
  place: placeShape.isRequired,
  isOpen: bool.isRequired,
  onConfirm: func.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(PlaceDialog)
