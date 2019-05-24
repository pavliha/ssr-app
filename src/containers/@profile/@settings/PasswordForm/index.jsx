import React from 'react'
import { object } from 'prop-types'
import { Field, Form } from 'formik'
import { CardContent, withStyles } from '@material-ui/core'
import { TextField } from 'components/formik'
import formik from './formik'
import SubmitButton from '../SubmitButton'

const styles = {
  root: {
    marginBottom: 15,
  },
}

const PasswordForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="password"
          label="Введите старый пароль"
          margin="normal"
          type="password"
          placeholder="********"
          component={TextField}
        />
        <Field
          name="password_new"
          label="Придумайте новый пароль"
          margin="normal"
          type="password"
          placeholder="********"
          component={TextField}
        />
        <Field
          name="password_repeat"
          label="Повторите новый пароль"
          margin="normal"
          type="password"
          placeholder="********"
          component={TextField}
        />
      </CardContent>
      <SubmitButton>обновить</SubmitButton>
    </Form>
  </div>

PasswordForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(PasswordForm))
