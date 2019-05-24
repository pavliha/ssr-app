/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { Form, Field } from 'formik'
import { object, func, bool } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import placeShape from 'src/shapes/place'
import { TextField, AddressField, ServerMessage } from 'src/components/formik'
import { CloseButton } from 'components'
import formik from './formik'

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    maxWidth: 400,
    padding: 20,
  },

  actions: {
    display: 'flex',
    marginTop: 25,
    alignItems: 'center'
  },
  message: {
    padding: 9,
  },

}

const PlaceForm = ({ classes, place, onCancel, isSubmitting }) =>
  <Form className={classes.root}>
    <div className={classes.form}>
      <div className={classes.title}>
        <CloseButton onClick={onCancel} />
        <Typography variant="h5">{place ? 'Изменить' : 'Добавить'} место</Typography>
      </div>
      <Field
        label="Название места"
        name="title"
        className={classes.headlineField}
        margin="normal"
        component={TextField}
      />
      <Field
        label="Адрес"
        name="address"
        margin="normal"
        component={AddressField}
      />
      <div className={classes.actions}>
        <Button
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
        >
          {place ? 'СОХРАНИТЬ' : 'ГОТОВО'}
        </Button>
        <ServerMessage className={classes.message} color="primary" name="message" />
      </div>
    </div>
  </Form>

PlaceForm.propTypes = {
  classes: object.isRequired,
  place: placeShape,
  isSubmitting: bool.isRequired,
  onSubmit: func.isRequired,
  onCancel: func.isRequired,
}

export default withStyles(styles)(formik(PlaceForm))
