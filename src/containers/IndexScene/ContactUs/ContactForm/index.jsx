import React from 'react'
import { object } from 'prop-types'
import { CardContent, Button, withStyles, CardActions } from '@material-ui/core'
import { Field, Form } from 'formik'
import { TextField } from 'components/formik'
import formik from './formik'

const styles = {
  root: {
    color: '#0083bc'
  },
}

const ContactForm = ({ classes }) =>
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
          name="question"
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
          label="Ваш вопрос"
          placeholder="Пишите здесь..."
          component={TextField}
        />
      </CardContent>
      <CardActions>
        <Button
          size="large"
          color="primary"
          fullWidth
          type="submit"
          variant="contained"
        >
          Отправить
        </Button>
      </CardActions>
    </Form>
  </div>

ContactForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(ContactForm))
