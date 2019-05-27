import React, { Component } from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'

const IndexScene = loadable(() => import('./IndexScene'), { fallback: <div>loading</div> })
const TestScene = loadable(() => import('./TestScene'), { fallback: <div>loading</div> })

console.log(IndexScene, TestScene)

class Layout extends Component {
  render() {
    return <Switch>
      <Route exact path="/" component={props => <IndexScene {...props} />} />
      <Route path="/test" component={props => <TestScene {...props} />} />
    </Switch>
  }
}

export default Layout
