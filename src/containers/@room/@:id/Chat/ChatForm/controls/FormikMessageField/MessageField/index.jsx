/* eslint-disable no-param-reassign */
import { withStyles } from '@material-ui/core'
import { string, func, object } from 'prop-types'
import React, { Component } from 'react'
import MessageInput from './MessageInput'
import EmojiPicker from './EmojiPicker'

const styles = {
  root: {
    flexGrow: 1,
    maxHeight: 72,
    overflow: 'auto',
    display: 'flex',
    alignItems: 'center'
  },
}

class MessageField extends Component {

  listenForEnter = async (e) => {
    const { onSend } = this.props
    const code = (e.keyCode ? e.keyCode : e.which)

    if (code === 13 && !e.shiftKey) {
      onSend(e)
    }
  }

  addEmoji = (emojiPic) => {
    const { name, value, onChange } = this.props

    onChange(name, value + emojiPic)
  }

  change = (e) => {
    const { name, onChange } = this.props

    onChange(name, e.target.value)
  }

  render() {
    const { classes, name, value, placeholder, onPaste } = this.props

    return (
      <div className={classes.root}>
        <EmojiPicker onSelect={this.addEmoji} />
        <MessageInput
          name={name}
          value={value}
          placeholder={placeholder}
          className={classes.root}
          onKeyPress={this.listenForEnter}
          onChange={this.change}
          onPaste={onPaste}
        />
      </div>
    )
  }
}

MessageField.propTypes = {
  classes: object.isRequired,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  onSend: func.isRequired,
  onChange: func.isRequired,
  onPaste: func.isRequired,
}

export default withStyles(styles)(MessageField)
