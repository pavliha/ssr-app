import React, { Component } from 'react'
import { object, string } from 'prop-types'
import { DateField } from 'components'
import { Button, Dialog } from '@material-ui/core'

class FormikDateField extends Component {

  state = {
    isDialogOpen: false,
  }

  submit = (name, value) => {
    const { form } = this.props
    const { submitForm, setFieldValue } = form

    setFieldValue('date', value)
    this.timeout = setTimeout(() => {
      submitForm()
      this.close()
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  open = () => this.setState({ isDialogOpen: true })

  close = () => this.setState({ isDialogOpen: false })

  render() {
    const { field, form, className, ...props } = this.props
    const { isDialogOpen } = this.state
    const { name, value, onBlur } = field

    return (
      <>
        <Button className={className} color="primary" onClick={this.open}>ДАТУ</Button>
        <Dialog open={isDialogOpen} onClose={this.close}>
          <DateField
            {...props}
            name={name}
            value={value}
            onChange={this.submit}
            error={(form.submitCount > 0) && !!form.errors[name]}
            helperText={(form.submitCount > 0) ? form.errors[name] : ''}
            onBlur={onBlur}
          />
        </Dialog>
      </>
    )
  }
}

FormikDateField.propTypes = {
  className: string,
  field: object.isRequired,
  form: object.isRequired,
}

export default FormikDateField
