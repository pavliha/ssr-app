import React from 'react'
import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from '@material-ui/styles'
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
export default hot(App)
