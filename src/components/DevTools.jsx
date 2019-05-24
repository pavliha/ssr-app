import React from 'react'

const DevTools = () => process.env.NODE_ENV === 'development' ? <div id="devtools" /> : ''

DevTools.propTypes = {}

export default DevTools
