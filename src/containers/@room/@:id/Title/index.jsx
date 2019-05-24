import React, { Component } from 'react'
import { object, string, number, func } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import TitleForm from './TitleForm'
import clickOutside from 'react-click-outside'

const styles = {
  root: {
    display: 'flex',
    cursor: 'pointer'
  },
  text: {
    cursor: 'pointer'
  }
}

class Title extends Component {

  state = {
    isEditable: false,
  }

  edit = () => {
    this.setState({ isEditable: true })
  }

  save = async (form) => {
    const { room_id, onUpdate } = this.props
    await onUpdate(room_id, form)
    this.setState({ isEditable: false })
  }

  handleClickOutside() {
    this.setState({ isEditable: false })
  }

  render() {
    const { classes, title } = this.props
    const { isEditable } = this.state

    return <div>
      {isEditable
        ? <TitleForm title={title} onSubmit={this.save} />
        : <Typography
          key={title}
          className={classes.text}
          variant="h6"
          onClick={this.edit}
        >
          {title || 'Назовите событие'}
        </Typography>
      }
    </div>
  }

}

Title.propTypes = {
  classes: object.isRequired,
  room_id: number,
  title: string,
  onUpdate: func.isRequired,
}

export default withStyles(styles)(clickOutside(Title))
