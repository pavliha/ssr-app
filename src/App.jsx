import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import init from 'lib/init'
import theme from './styles/theme'
import Layout from 'containers/Layout'
import 'assets/index.css'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { Provider } from 'react-redux'
import { store } from 'src/redux'

const App = () => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <Provider store={store}>
        <Layout />
      </Provider>
    </ThemeProvider>
  )
}

export default init(App)
