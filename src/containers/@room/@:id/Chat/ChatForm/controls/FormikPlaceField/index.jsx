import React, { Component } from 'react'
import { object } from 'prop-types'
import PlaceField from './PlaceField'

class FormikPlaceField extends Component {

  createPlace = (name, place) => {
    const { form } = this.props
    const { submitForm, setFieldValue } = form

    setFieldValue(name, place.id)
    this.timeout = setTimeout(() => submitForm())
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { field, form, ...props } = this.props
    const { name, value, onBlur } = field

    return (
      <PlaceField
        {...props}
        name={name}
        value={value}
        onChange={this.createPlace}
        onBlur={onBlur}
      />
    )
  }
}

FormikPlaceField.propTypes = {
  field: object.isRequired,
  form: object.isRequired,
}

export default FormikPlaceField
