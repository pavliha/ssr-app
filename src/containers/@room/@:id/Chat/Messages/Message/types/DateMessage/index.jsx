import React, { Component } from 'react'
import { func, object, shape } from 'prop-types'
import { Button, Typography, withStyles } from '@material-ui/core'
import messageShape from 'shapes/message'
import StatusCaption from '../StatusCaption'
import moment from 'moment'
import DateDialog from './DateDialog'
import connector from './connector'

const styles = () => ({
  root: {
    boxShadow: '2px 2px 3px -1px rgba(156, 169, 189, 0.3)',
    padding: 15,
    width: 300,
    height: 250,
    overflow: 'hidden',
    backgroundSize: 'cover',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textShadow: '0 3px 6px #000000',
    color: 'white'
  },
  address: {
    textShadow: '0 3px 6px #000000',
    color: 'white',
    marginBottom: 20,
  },
  content: {
    zIndex: 10,
    textAlign: 'center'
  },
})

class DateMessage extends Component {

  state = {
    isModalOpen: false,
  }

  openModal = () => this.setState({ isModalOpen: true, })

  closeModal = () => this.setState({ isModalOpen: false, })

  changeDate = async () => {
    const { actions, message: { room_id, date } } = this.props
    await actions.rooms.update(room_id, { date })
    this.closeModal()
  }

  render() {
    const { classes, message } = this.props
    const { isModalOpen } = this.state
    const background_url = '/images/sparks.png'
    const backgroundImage = background_url && `url(${background_url})`

    return (
      <div>
        <div className={classes.root} style={{ backgroundImage }}>
          <div className={classes.content}>
            <Typography className={classes.title} variant="h5">Предложеная дата</Typography>
            <Typography gutterBottom variant="body1" className={classes.address}>
              {moment(message.date).format('D MMMM, dddd')}
            </Typography>
            {message.date !== message.room.date
              ? <Button
                variant="contained"
                color="primary"
                onClick={this.openModal}
                size="small"
              >
                Принять
              </Button>
              : <Typography color="secondary">Установленая дата</Typography>}
          </div>
        </div>
        <DateDialog
          date={message.date}
          isOpen={isModalOpen}
          onCancel={this.closeModal}
          onConfirm={this.changeDate}
        />
        <StatusCaption message={message} />
      </div>
    )
  }
}

DateMessage.propTypes = {
  classes: object.isRequired,
  message: messageShape.isRequired,
  actions: shape({
    rooms: shape({
      update: func.isRequired,
    }),
  }),
}

export default withStyles(styles)(connector(DateMessage))
