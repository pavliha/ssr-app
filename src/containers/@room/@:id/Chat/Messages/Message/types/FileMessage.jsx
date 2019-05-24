import React from 'react'
import { object } from 'prop-types'
import { IconButton, Typography, withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import DownloadIcon from 'mdi-react/DownloadIcon'
import isPicture from 'utils/isPicture'
import StatusCaption from './StatusCaption'

const styles = theme => ({
  root: {
    padding: '5px 20px 5px 5px',
    borderRadius: 20,
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
    background: theme.palette.secondary.main,
    display: 'flex',
  },
  download: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: 5,
  }
})

const PictureMessage = ({ classes, message }) => {
  if (isPicture(message.asset?.url)) return null

  if (!message.asset) return null
  if (message.text) return null

  return (
    <div className={classes.root}>
      <a download={message.asset.title} href={message.asset.url}>
        <div className={classes.download}>
          <IconButton className={classes.button}>
            <DownloadIcon />
          </IconButton>
          <Typography>
            {message.asset.title}
          </Typography>
        </div>
      </a>
      <StatusCaption message={message} />
    </div>
  )
}
PictureMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired
}

export default withStyles(styles)(PictureMessage)
