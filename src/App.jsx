import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from 'react-redux'
import theme from './styles/theme'
import Layout from 'containers/Layout'
import store from 'src/redux/store'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </Provider>
  )
}
export default hot(App)
