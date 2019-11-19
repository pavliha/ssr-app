import React, { Component } from 'react'
import { func, node, object, string, any } from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import { Loading } from 'components'
import ErrorIcon from 'mdi-react/ErrorIcon'
import isEqual from 'lodash/isEqual'

const styles = theme => ({

  root: {},

  loading: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 10,
  },

  errorContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    width: 100,
    height: 100,
    color: theme.palette.error.main
  }
})

class Loader extends Component {

  state = {
    isLoading: false,
    isLoaded: false,
    error: null,
  }

  async componentDidMount() {
    const { params } = this.props
    await this.load(params)
  }

  async shouldComponentUpdate(next) {
    const prev = this.props
    if (isEqual(prev.params, next.params)) return

    await this.load(next.params)
  }

  load = async (params) => {
    const { load, onError, onLoad } = this.props
    try {
      this.setState({ error: null, isLoading: true })
      const result = await load(params)
      this.setState({ isLoaded: true, isLoading: false })
      onLoad(result)
    } catch (error) {
      this.setState({ error })
      onError(error)
    }
  }

  render() {
    const { classes, children, className } = this.props
    const { isLoaded, isLoading, error } = this.state

    if (error) {
      return (
        <div className={classes.loading}>
          <div className={classes.errorContainer}>
            <ErrorIcon className={classes.error} />
            <Typography color="textSecondary">{error.message}</Typography>
            <Typography color="textSecondary">{error.error?.message}</Typography>
          </div>
        </div>
      )
    }

    if (isLoading) {
      return (
        <div className={className}>
          <div className={classes.loading}>
            <Loading />
          </div>
          {children}
        </div>

      )
    }

    if (isLoaded && className) {
      return (
        <div className={className}>
          {children}
        </div>
      )
    }

    if (isLoaded) {
      return children
    }

    return null
  }
}

Loader.propTypes = {
  classes: object.isRequired,
  className: string,
  params: any,
  load: func.isRequired,
  children: node,
  onLoad: func.isRequired,
  onError: func.isRequired,
}

Loader.defaultProps = {
  onLoad: () => {},
  onError: () => {}
}

export default withStyles(styles)(Loader)
