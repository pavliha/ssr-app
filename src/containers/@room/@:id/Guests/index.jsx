import React, { Component } from 'react'
import { object, func } from 'prop-types'
import roomShape from 'shapes/room'
import authShape from 'shapes/auth'
import { withStyles, List } from '@material-ui/core'
import { SearchField, Loading } from 'components'
import isEmpty from 'lodash/isEmpty'
import arrayToObject from 'utils/arrayToObject'
import Guest from './Guest'

const styles = {
  root: {
    overflow: 'auto',
    flexGrow: 1,
  },
  search: {
    padding: '0px 20px 30px 20px',
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  }
}

class Guests extends Component {

  state = {
    searchString: '',
    filtered_ids: [],
    isLoading: false,
  }

  componentDidMount() {
    this.load().catch(console.error)
  }

  load = async () => {
    const { room, onLoad } = this.props
    this.setState({ isLoading: true })
    const result = await onLoad(room.id)
    this.setState({ isLoading: false })

    return result
  }

  kick = (guest) => {
    const { room, onKick } = this.props
    onKick(room.id, guest.id)
  }

  look = searchString => guest => {
    return `${guest.name} ${guest.email}`.toLowerCase().includes(searchString.toLowerCase())
  }

  search = e => {
    const searchString = e.target.value
    const { room } = this.props

    const filtered_ids = room.guests
      .filter(this.look(searchString))
      .map(user => user.id)

    this.setState({ searchString, filtered_ids })
  }

  filter = (guests) => {
    const { filtered_ids, searchString } = this.state
    if (isEmpty(filtered_ids) && isEmpty(searchString)) return guests
    if (isEmpty(filtered_ids) && !isEmpty(searchString)) return []

    return filtered_ids.map(id => arrayToObject(guests)[id])
  }

  render() {
    const { classes, room, auth } = this.props
    const { isLoading } = this.state
    const filtered = this.filter(room.guests)

    if (isLoading) return <Loading className={classes.loading} />

    return (
      <>
        <SearchField className={classes.search} onChange={this.search} />
        <List className={classes.root}>
          {filtered.map(guest => (
            <Guest
              key={guest.id}
              auth={auth}
              admin={room.admin}
              guest={guest}
              onKick={this.kick}
            />
          ))}
        </List>
      </>
    )
  }
}

Guests.propTypes = {
  classes: object.isRequired,
  auth: authShape.isRequired,
  room: roomShape.isRequired,
  onLoad: func.isRequired,
  onKick: func.isRequired,
}

export default withStyles(styles)(Guests)
