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

const ContactForm = ({ classes }) =>
  <Form className={classes.root}>
    <CardContent>
      <Field
        type="text"
        name="facebook"
        label="facebook"
        margin="normal"
        placeholder="username"
        component={TextField}
      />
      <Field
        type="text"
        name="instagram"
        label="instagram"
        margin="normal"
        placeholder="@username"
        component={TextField}
      />
      <Field
        type="text"
        name="telegram"
        label="telegram"
        margin="normal"
        placeholder="@username"
        component={TextField}
      />
      <Field
        type="text"
        name="skype"
        label="skype"
        margin="normal"
        placeholder="username"
        component={TextField}
      />
    </CardContent>
    <SubmitButton>сохранить</SubmitButton>
  </Form>

ContactForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ContactForm))
