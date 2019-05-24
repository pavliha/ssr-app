import React from 'react'
import { object } from 'prop-types'
import { Field, Form } from 'formik'
import { CardContent, withStyles } from '@material-ui/core'
import AuthCardActions from 'containers/@auth/AuthCard/AuthCardActions'
import { TextField, ServerMessage } from 'components/formik'
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

const LoginForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="email"
          label="Email"
          autoComplete="email"
          variant="outlined"
          margin="normal"
          placeholder="email@example.com"
          component={TextField}
        />
        <Field
          type="password"
          name="password"
          label="Пароль"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          placeholder="*******"
          component={TextField}
        />
      </CardContent>
      <ServerMessage color="error" name="non_field_error" />
      <AuthCardActions
        textButton="Войти"
        linkTo="/auth/password/forgot"
        textLink="Забыли пароль?"
      />
    </Form>
  </div>

LoginForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(LoginForm))
