import React, { Component } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import { object, func } from 'prop-types'
import { IconButton, withStyles, Popover } from '@material-ui/core'
import FaceIcon from 'mdi-react/SentimentVerySatisfiedIcon'

const styles = {
  root: {},
}

class EmojiPicker extends Component {

  state = {
    anchorEl: null,
  }

  open = event => {
    this.setState({
      anchorEl: event.currentTarget,
    })
  }

  close = () => {
    this.setState({
      anchorEl: null,
    })
  }

  select = (e) => {
    const { onSelect } = this.props
    // console.log(e.unified)
    if (e.unified.length <= 5) {
      let emojiPic = String.fromCodePoint(`0x${e.unified}`)
      onSelect(emojiPic)
    } else {
      let sym = e.unified.split('-')
      let codesArray = []
      sym.forEach(el => codesArray.push('0x' + el))
      // console.log(codesArray.length)
      // console.log(codesArray)  // ["0x1f3f3", "0xfe0f"]
      let emojiPic = String.fromCodePoint(...codesArray)
      onSelect(emojiPic)
      this.close()
    }
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    return (
      <>
        <IconButton onClick={this.open} className={classes.root}>
          <FaceIcon />
        </IconButton>
        <Popover
          id="simple-cool"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={this.close}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Picker showPreview={false} native onSelect={this.select} />
        </Popover>
      </>
    )
  }
}

EmojiPicker.propTypes = {
  classes: object.isRequired,
  onSelect: func.isRequired,
}

export default withStyles(styles)(EmojiPicker)
