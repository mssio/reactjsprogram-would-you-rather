import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'
import { container, innerContainer } from './styles.css'
import { Navigation } from 'components'

class MainContainer extends Component {
  componentDidMount () {
    this.props.removeFetchingUser()
  }

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

const { node, bool, func } = PropTypes

MainContainer.propTypes = {
  children: node.isRequired,
  isAuthed: bool.isRequired,
  removeFetchingUser: func.isRequired,
}

function mapStateToProps ({users}) {
  return {
    isAuthed: users.get('isAuthed'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
