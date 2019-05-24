import React from 'react'
import { object, func, bool, string } from 'prop-types'
import {
  withStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'
import moment from 'moment'

const styles = {
  root: {},
  content: {}
}

const PlaceDialog = ({ classes, date, isOpen, onConfirm, onCancel }) =>
  <Dialog className={classes.root} open={isOpen} onClose={onCancel}>
    <DialogTitle>Установить предложенную дату?</DialogTitle>
    <DialogContent className={classes.content}>
      <DialogContentText>
        Предложенная дата: {moment(date).format('D MMMM, dddd')} будет установлено как основная
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCancel}>Отмена</Button>
      <Button color="primary" variant="outlined" onClick={onConfirm}>Установить</Button>
    </DialogActions>
  </Dialog>

PlaceDialog.propTypes = {
  classes: object.isRequired,
  date: string.isRequired,
  isOpen: bool.isRequired,
  onConfirm: func.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(PlaceDialog)
