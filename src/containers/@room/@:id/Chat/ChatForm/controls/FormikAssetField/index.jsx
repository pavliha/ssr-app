import React, { Component } from 'react'
import { object } from 'prop-types'
import AssetField from './AssetField'

class FormikAssetField extends Component {

  saveAttachment = (name, asset) => {
    const { form } = this.props
    const { submitForm, setFieldValue } = form

    setFieldValue(name, asset.id, false)
    setTimeout(() => submitForm())
  }

  render() {
    const { field, form, ...props } = this.props
    const { name, value, onBlur } = field

    return (
      <AssetField
        {...props}
        name={name}
        value={value}
        onChange={this.saveAttachment}
        onBlur={onBlur}
      />
    )
  }
}

FormikAssetField.propTypes = {
  field: object.isRequired,
  form: object.isRequired,
}

export default FormikAssetField
