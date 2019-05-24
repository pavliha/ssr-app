import React, { Component, Fragment } from 'react'
import { object } from 'prop-types'
import MessageField from './MessageField'
import ClipboardImageDialog from './ClipboardImageDialog'

class FormikMessageField extends Component {

  state = {
    isOpenDialog: false,
    file: null,
  }

  findSomePicture = (clipboardItems) => {
    const items = Array.from(clipboardItems)

    return items.find(item => item.type.includes('image'))
  }

  openDialog = (file) => {
    this.setState({ isOpenDialog: true, file })
  }

  closeDialog = () => {
    this.setState({ isOpenDialog: false, file: null })
  }

  handlePaste = ({ clipboardData }) => {
    const file = this.findSomePicture(clipboardData.files)
    if (file) this.openDialog(file)
  }

  saveAttachment = (asset) => {
    const { form } = this.props
    const { submitForm, setFieldValue } = form

    setFieldValue('asset_id', asset.id)

    setTimeout(() => submitForm())
    this.closeDialog()
  }

  render() {
    const { field, form, ...props } = this.props
    const { file, isOpenDialog } = this.state
    const { name, value, onBlur } = field
    const { handleSubmit, setFieldValue } = form

    return (
      <Fragment>
        <MessageField
          {...props}
          onPaste={this.handlePaste}
          onChange={setFieldValue}
          onBlur={onBlur}
          placeholder={'Ваше сообщение...'}
          onSend={handleSubmit}
          value={value}
          name={name}
        />
        <ClipboardImageDialog
          isOpen={isOpenDialog}
          file={file}
          onConfirm={this.saveAttachment}
          onClose={this.closeDialog}
        />
      </Fragment>
    )
  }
}

FormikMessageField.propTypes = {
  field: object.isRequired,
  form: object.isRequired,
}

export default FormikMessageField
