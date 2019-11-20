import { hot } from 'react-hot-loader/root'

const isDevelopment = process.env.NODE_ENV === 'development'
const isServer = typeof window === 'undefined'

const Empty = () => null

const init = (Component) => (isDevelopment && isServer) ? Empty : hot(Component)

export default init
