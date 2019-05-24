import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { TextField } from '@material-ui/core'

const FormikTextField = ({ field: { value, name, onChange, onBlur }, form, ...props }) =>
  <TextField
    {...props}
    name={name}
    value={value}
    InputLabelProps={{ shrink: true }}
    onChange={onChange}
    onBlur={onBlur}
    fullWidth
    error={(form.submitCount > 0) && !!form.errors[name]}
    helperText={(form.submitCount > 0) && form.errors[name]}
  />

FormikTextField.propTypes = {
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

export default FormikTextField
