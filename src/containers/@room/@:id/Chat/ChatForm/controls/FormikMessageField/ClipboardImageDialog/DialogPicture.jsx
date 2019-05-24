import React, { Component } from 'react'
import { object } from 'prop-types'
import { DialogContent, withStyles } from '@material-ui/core'
import { Loading } from 'components'

const styles = {
  picture: {
    width: '100%',
    maxHeight: 900,
  },
  pictureWrapper: {
    textAlign: 'center',
  },
}

class DialogPicture extends Component {

  state = {
    src: null,
  }

  componentDidMount() {
    const { file } = this.props
    const reader = new FileReader()
    reader.onload = (e) => {
      this.setState({ src: e.target.result })
    }
    reader.readAsDataURL(file)
  }

  render() {
    const { classes } = this.props
    const { src } = this.state

    return (
      <DialogContent>
        <div className={classes.pictureWrapper}>
          {!src ? <Loading /> : <img className={classes.picture} alt="modal" src={src} />}
        </div>
      </DialogContent>
    )
  }
}

DialogPicture.propTypes = {
  classes: object.isRequired,
  file: object.isRequired,
}

export default withStyles(styles)(DialogPicture)
