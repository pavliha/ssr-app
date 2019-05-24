import React from 'react'
import { object } from 'prop-types'
import { Field, Form } from 'formik'
import { CardContent, withStyles } from '@material-ui/core'
import { TextField, ServerMessage } from 'components/formik'
import formik from './formik'
import SubmitButton from '../SubmitButton'

const styles = {
  root: {
    marginBottom: 15,
  },
}

const UserForm = ({ classes }) =>
  <div className={classes.root}>
    <Form>
      <CardContent>
        <Field
          name="name"
          label="Имя и фамилия"
          margin="normal"
          placeholder="Вася Пупкин"
          component={TextField}
        />
        <Field
          type="text"
          name="phone"
          label="Номер телефона"
          margin="normal"
          placeholder="+380683188524"
          component={TextField}
        />
      </CardContent>
      <SubmitButton>сохранить</SubmitButton>
    </Form>
  </div>

UserForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(UserForm))
