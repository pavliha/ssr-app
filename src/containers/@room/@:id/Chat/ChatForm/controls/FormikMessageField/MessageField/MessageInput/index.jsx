import React from 'react'
import { func, object, string } from 'prop-types'
import { Input, withStyles } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1,
    paddingLeft: 15,
    maxHeight: 72,
    minHeight: 72,
  },
  inputMultiline: {
    padding: 0,
  },
}

const MessageInput = ({ classes, placeholder, name, value, onChange, onPaste, onKeyPress, }) =>
  <Input
    placeholder={placeholder}
    classes={classes}
    name={name}
    value={value}
    disableUnderline
    autoComplete="off"
    fullWidth
    multiline
    onKeyPress={onKeyPress}
    onChange={onChange}
    onPaste={onPaste}
  />

MessageInput.propTypes = {
  classes: object.isRequired,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired,
  onPaste: func.isRequired,
  onKeyPress: func.isRequired,
}

export default withStyles(styles)(MessageInput)
