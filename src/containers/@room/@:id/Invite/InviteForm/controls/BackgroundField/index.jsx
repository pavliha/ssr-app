import React, { Component } from 'react'
import { object, arrayOf, func, string } from 'prop-types'
import { Typography, withStyles } from '@material-ui/core'
import Plate from './Plate'

const styles = {
  root: {
    paddingTop: 15,
  },
  list: {
    display: 'flex'
  }
}

class BackgroundField extends Component {

  select = (background_url) => () => {
    const { name, onChange } = this.props
    onChange(name, background_url)
  }

  render() {
    const { label, classes, background_urls, value } = this.props

    return (
      <div className={classes.root}>
        <Typography variant="caption" gutterBottom color="textSecondary">
          {label}
        </Typography>
        <div className={classes.list}>
          {background_urls.map(background_url =>
            <Plate
              key={background_url}
              url={background_url}
              isSelected={value === background_url}
              onClick={this.select(background_url)} />
          )}
        </div>
      </div>
    )
  }
}

BackgroundField.propTypes = {
  classes: object.isRequired,
  label: string,
  background_urls: arrayOf(string).isRequired,
  name: string.isRequired,
  value: string,
  onChange: func.isRequired,
}

export default withStyles(styles)(BackgroundField)
