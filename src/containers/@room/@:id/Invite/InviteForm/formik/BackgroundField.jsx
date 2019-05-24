import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import BackgroundField from '../controls/BackgroundField'

const FormikBackgroundField = ({ field, form, ...props }) =>
  <BackgroundField
    {...props}
    name={field.name}
    value={field.value}
    onChange={form.setFieldValue}
  />

FormikBackgroundField.propTypes = {
  field: shape({
    name: string,
    value: string,
    onChange: func,
    onBlur: func,
  }).isRequired,
  form: shape({
    errors: object,
    submitCount: number,
  }).isRequired,
}

export default FormikBackgroundField
