import React, { Component } from 'react'
import { object, func, string, bool } from 'prop-types'
import { TextField, withStyles } from '@material-ui/core'

const styles = {
  root: {
    padding: 15,
  },
  calendar: {
    paddingLeft: 15,
    paddingRight: 15,

  }
}

class DateField extends Component {
  changeFirstInput = (e) => {
    const { name, onChange } = this.props

    onChange(name, e.target.value)
  }

  render() {
    const { classes, helperText, value, error } = this.props
    return (
      <div className={classes.root}>
        <TextField
          type="date"
          fullWidth
          value={value}
          margin="normal"
          error={error}
          helperText={helperText}
          onChange={this.changeFirstInput}
        />
      </div>
    )
  }
}

DateField.propTypes = {
  classes: object.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  error: bool,
  helperText: string,
}

export default withStyles(styles)(DateField)
