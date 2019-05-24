import React, { Component } from 'react'
import { object, func, shape, bool } from 'prop-types'
import { Typography, withStyles, Button } from '@material-ui/core'
import messageShape from 'shapes/message'
import PlaceDialog from './PlaceDialog'
import connector from './connector'
import { Loading } from 'components'
import StatusCaption from '../StatusCaption'

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
    //  '&::before': {
    //    position: 'absolute',
    //    overflow: 'hidden',
    //    // background: 'radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 20%)',
    //    borderRadius: '100%',
    //    width: '100%',
    //    height: '100%',
    //    content: `' '`,
    //  }
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

class PlaceMessage extends Component {

  state = {
    isPlaceModalOpen: false,
    isLoadingPlace: false,
  }

  componentDidMount() {
    const { message: { place_id, place } } = this.props
    if (!place) this.load(place_id).catch(console.error)
  }

  load = async (place_id) => {
    const { actions } = this.props
    this.setState({ isLoadingPlace: true })
    await actions.places.load(place_id)
    this.setState({ isLoadingPlace: false })
  }

  openModal = () => {
    this.setState({ isPlaceModalOpen: true, })
  }

  closeModal = () => {
    this.setState({ isPlaceModalOpen: false, })
  }

  changePlace = async () => {
    const { actions, message: { room_id, place } } = this.props
    await actions.rooms.update(room_id, { place_id: place.id })
    this.closeModal()
  }

  render() {
    const { classes, message } = this.props
    const { isPlaceModalOpen, isLoadingPlace } = this.state
    const place = message.place
    const background_url = place?.background_url || '/images/sparks.png'
    const backgroundImage = background_url && `url(${background_url})`

    return (
      <div>
        <div className={classes.root} style={{ backgroundImage }}>
          {!message.place || isLoadingPlace
            ? (
              <Loading />
            )
            : (
              <div className={classes.content}>
                <Typography className={classes.title} variant="h5">{place.title}</Typography>
                <Typography gutterBottom variant="body1" className={classes.address}>{place.address}</Typography>
                {message.room.place_id !== message.place_id
                  ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.openModal}
                      size="small"
                    >
                      Принять
                    </Button>
                  )
                  : <Typography color="secondary">Установленное место</Typography>
                }
              </div>
            )}
          {place && (
            <PlaceDialog
              place={place}
              isOpen={isPlaceModalOpen}
              onCancel={this.closeModal}
              onConfirm={this.changePlace}
            />
          )}
        </div>
        <StatusCaption message={message} />
      </div>
    )
  }
}

PlaceMessage.propTypes = {
  classes: object.isRequired,
  actions: shape({
    rooms: shape({
      update: func.isRequired,
    }),
    places: shape({
      load: func.isRequired,
    })
  }),
  message: messageShape.isRequired,
}

export default withStyles(styles)(connector(PlaceMessage))
