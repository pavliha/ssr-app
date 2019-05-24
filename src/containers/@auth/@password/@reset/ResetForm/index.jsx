import React from 'react'
import { object } from 'prop-types'
import { CardContent, withStyles } from '@material-ui/core'
import AuthCardActions from 'containers/@auth/AuthCard/AuthCardActions'
import { TextField } from 'components/formik'
import { Field, Form } from 'formik'
import formik from './formik'

const styles = {
  root: {
    color: '#0083bc'
  },
  link: {
    marginTop: 10,
    marginLeft: 20,
  },
}

const ResetForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          placeholder="*******"
          label="Введите новый пароль"
          component={TextField}
        />
        <Field
          type="password"
          name="password_repeat"
          margin="normal"
          variant="outlined"
          placeholder="*******"
          label="Повторите новый пароль"
          component={TextField}
        />
      </CardContent>
      <AuthCardActions
        textButton="Готово"
        linkTo="/auth/login"
        textLink="Войти"
      />
    </Form>
  </div>

ResetForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ResetForm))
