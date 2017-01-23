import React, { Component, PropTypes } from 'react'
import { container, innerContainer } from './styles.css'
import { Navigation } from 'components'

class MainContainer extends Component {
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainContainer
