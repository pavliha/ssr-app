import React from 'react'
import { func, number, object, shape, string } from 'prop-types'
import { TextField } from '@material-ui/core'

const AddressField = ({ field, form, ...props }) =>
  <TextField
    {...props}
    {...field}
    InputLabelProps={{ shrink: true }}
    fullWidth
    error={(form.submitCount > 0) && !!form.errors[field.name]}
    helperText={(form.submitCount > 0) && form.errors[field.name]}
  />

AddressField.propTypes = {
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

export default AddressField
