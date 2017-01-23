import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'
import { Authenticate } from 'components'

class AuthenticateContainer extends Component {
  handleAuth = (e) => {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.context.router.replace('results'))
  }

  render () {
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  }
}

const { bool, string, func, object } = PropTypes

AuthenticateContainer.propTypes = {
  isFetching: bool.isRequired,
  error: string.isRequired,
  fetchAndHandleAuthedUser: func.isRequired,
}

AuthenticateContainer.contextTypes = {
  router: object.isRequired,
}

function mapStateToProps ({users}) {
  return {
    isFetching: users.get('isFetching'),
    error: users.get('error'),
    fetchAndHandleAuthedUser: func.isRequired,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer)
