import React from 'react'
import loadable from '@loadable/component'
import { Route, Switch } from 'react-router-dom'
import { AuthGate, Loading } from 'components'

const IndexScene = loadable(() => import('./IndexScene'), { fallback: <Loading /> })
const AuthLayout = loadable(() => import('./@auth/AuthLayout'), { fallback: <Loading /> })
const InviteLayout = loadable(() => import('./@invite/InviteLayout'))
const HomeScene = loadable(() => import('./@home/HomeScene'))
const RoomLayout = loadable(() => import('./@room/RoomLayout'))
const ProfileLayout = loadable(() => import('./@profile/ProfileLayout'))

const Layout = () =>
  <Switch>
    <Route exact path="/" component={props => <IndexScene {...props} />} />
    <Route path="/auth" component={props => <AuthLayout {...props} />} />
    <Route path="/invite" component={props => <InviteLayout {...props} />} />
    <AuthGate path="/home" component={props => <HomeScene {...props} />} />
    <AuthGate path="/room" component={props => <RoomLayout {...props} />} />
    <AuthGate path="/profile" component={props => <ProfileLayout {...props} />} />
  </Switch>

export default Layout
