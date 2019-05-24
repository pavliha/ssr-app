import React, { Component } from 'react'
import { withStyles, Button, Drawer } from '@material-ui/core'
import { shape, func, string } from 'prop-types'
import connector from './connector'
import PlaceForm from './PlaceForm'

const styles = {
  root: {
    position: 'relative'
  },
}

class PlaceField extends Component {

  state = {
    isDrawerOpen: false,
  }

  open = () => {
    this.setState({ isDrawerOpen: true })
  }

  close = () => {
    this.setState({ isDrawerOpen: false })
  }

  create = async (form) => {
    const { name, actions, onChange } = this.props

    const { value: place } = await actions.place.create(form)

    onChange(name, place)
    this.close()
  }

  render() {
    const { className } = this.props
    const { isDrawerOpen } = this.state

    return (
      <>
        <Button className={className} color="primary" onClick={this.open}>МЕСТО</Button>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={this.close}
        >
          <PlaceForm onCancel={this.close} onSubmit={this.create} />
        </Drawer>
      </>
    )
  }
}

PlaceField.propTypes = {
  className: string,
  actions: shape({
    place: shape({
      create: func.isRequired,
    })
  }),
  name: string.isRequired,
  onChange: func.isRequired
}

export default withStyles(styles)(connector(PlaceField))
