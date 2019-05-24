import React from 'react'
import { string } from 'prop-types'

const Danger = ({ component: Component, children, ...rest }) =>
  <Component {...rest} dangerouslySetInnerHTML={{ __html: children }} />

Danger.propTypes = {
  children: string.isRequired,
  component: string,
}

Danger.defaultProps = {
  component: 'div',
}

export default Danger
