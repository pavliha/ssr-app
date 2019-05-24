import React from 'react'
import { object } from 'prop-types'
import { Button, withStyles } from '@material-ui/core'
import { Field, Form } from 'formik'
import FormikTextField from 'src/components/formik/TextField'
import formik from './formik'

const styles = {
  root: {
    display: 'flex',
    minWidth: 350,
  },
  field: {
    flexBasis: '70%',
    marginRight: 5,
  },
}

const TitleForm = ({ classes }) =>
  <Form className={classes.root}>
    <Field
      name="title"
      component={FormikTextField}
      placeholder="Назовите событие"
      className={classes.field}
    />
    <Button
      type="submit"
      size="small"
      variant="outlined"
    >
      Сохранить
    </Button>
  </Form>

TitleForm.propTypes = {
  classes: object.isRequired,
}

export default withStyles(styles)(formik(TitleForm))
