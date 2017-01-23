import React, { Component } from 'react'

class MainContainer extends Component {
  render () {
    return (
      <div>
        <h1>{'Main'}</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default MainContainer
