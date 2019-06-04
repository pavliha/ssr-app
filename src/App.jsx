import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import init from 'lib/init'
import theme from './styles/theme'
import Layout from 'containers/Layout'
import 'assets/index.css'

const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) jssStyles.parentNode.removeChild(jssStyles)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}

export default init(App)
