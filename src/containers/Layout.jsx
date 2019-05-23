import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Helmet } from 'react-helmet'

class Layout extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div>
        <Helmet>
          <title>hello world</title>
        </Helmet>
        render asasdasd asd asd asd
      </div>
    )

  }
}

Layout.propTypes = {}

export default hot(Layout)
