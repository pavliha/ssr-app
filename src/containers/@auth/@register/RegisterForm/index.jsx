import React from 'react'
import { object } from 'prop-types'
import { CardContent, withStyles } from '@material-ui/core'
import AuthCardActions from 'containers/@auth/AuthCard/AuthCardActions'
import { Field, Form } from 'formik'
import { TextField } from 'components/formik'
import formik from './formik'

const styles = {
  root: {
    color: '#0083bc'
  },
}

const RegisterForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="name"
          label="Имя и фамилия"
          margin="normal"
          variant="outlined"
          placeholder="Вася Пупкин"
          component={TextField}
        />
        <Field
          name="email"
          label="Email"
          margin="normal"
          autoComplete="email"
          variant="outlined"
          placeholder="email@example.com"
          component={TextField}
        />
        <Field
          type="password"
          name="password"
          margin="normal"
          autoComplete="current-password"
          variant="outlined"
          label="Пароль"
          placeholder="*******"
          component={TextField}
        />
      </CardContent>
      <AuthCardActions
        textButton="Дальше"
        linkTo="/auth/login"
        textLink="Уже есть аккаунт?"
      />
    </Form>
  </div>

RegisterForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(RegisterForm))
