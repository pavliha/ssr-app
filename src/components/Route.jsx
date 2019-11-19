import React from 'react'
import { any, bool, string } from 'prop-types'
import { Route as ReactRoute } from 'react-router-dom'

const Route = ({ exact, path, component: Component, ...rest }) =>
  <ReactRoute
    exact={exact}
    path={path}
    render={(...props) =>
      <Component {...props} {...rest} />
    }
  />

Route.propTypes = {
  exact: bool,
  path: string,
  component: any,
}

export default Route
