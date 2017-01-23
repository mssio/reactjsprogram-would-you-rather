import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
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

const { node, bool } = PropTypes

MainContainer.propTypes = {
  children: node.isRequired,
  isAuthed: bool.isRequired,
}

function mapStateToProps ({users}, props) {
  return {
    isAuthed: users.get('isAuthed'),
  }
}

export default connect(
  mapStateToProps
)(MainContainer)
