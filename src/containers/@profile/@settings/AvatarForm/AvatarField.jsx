import React, { Component } from 'react'
import { object, string, func } from 'prop-types'
import Asset from 'api/Asset'
import userShape from 'shapes/user'
import { CircularProgress, IconButton, withStyles } from '@material-ui/core'
import { UserAvatar } from 'components'
import InsertPhotoIcon from 'mdi-react/CameraAltIcon'

const styles = {
  root: {
    position: 'relative',
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  cover: {
    position: 'absolute',
    borderRadius: '100%',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    '&:focus,&:hover': {
      backgroundColor: 'rgba(0,0,0,0.6)',
    }
  },
  fileInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0,
  },
  circular: {
    position: 'absolute',
    top: 0,
  }
}

class AvatarField extends Component {

  state = {
    loading: 0,
    avatar_url: ''
  }

  preview = (file) => {
    const reader = new FileReader()
    reader.onload = () => {
      this.setState({ avatar_url: reader.result })
    }
    try {
      reader.readAsDataURL(file)
    } catch (e) {
      console.warn(e)
    }
  }

  handleProgress = (progressEvent) => {
    const loading = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    this.setState({ loading: loading === 100 ? 0 : loading })
  }

  upload = async (e) => {
    const { name, onChange } = this.props
    const file = e.target.files[0]
    this.preview(file)

    try {
      const asset = await Asset.create(file, { onUploadProgress: this.handleProgress })
      onChange(name, asset.url)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { classes, user, value } = this.props
    const { loading, avatar_url } = this.state
    return (
      <div className={classes.root}>
        <UserAvatar
          user={{ ...user, avatar_url: avatar_url || value, }}
          className={classes.avatar}
        />
        <input
          accept="image/*"
          className={classes.fileInput}
          id="upload-avatar"
          multiple
          type="file"
          onChange={this.upload}
        />
        <label htmlFor="upload-avatar" className={classes.cover}>
          <IconButton color="secondary">
            <label style={{ display: 'flex' }} htmlFor="upload-avatar">
              <InsertPhotoIcon />
            </label>
          </IconButton>
        </label>
        {Boolean(loading) && (
          <CircularProgress
            variant="static"
            value={loading}
            size={200}
            className={classes.circular}
          />
        )}
      </div>
    )
  }
}

AvatarField.propTypes = {
  classes: object.isRequired,
  user: userShape.isRequired,
  value: string.isRequired,
  name: string.isRequired,
  onChange: func.isRequired,
}

export default withStyles(styles)(AvatarField)
