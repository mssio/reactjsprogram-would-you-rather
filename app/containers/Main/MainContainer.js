import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'
import { firebaseAuth } from 'config/constants'
import { formatUserInfo } from 'helpers/utils'
import { container, innerContainer } from './styles.css'
import { Navigation, Loading } from 'components'

class MainContainer extends Component {
  componentDidMount () {
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
        if (this.props.location.pathname === '/') {
          this.context.router.replace('results')
        }
      } else {
        this.props.removeFetchingUser()
      }
    })
  }

  render () {
    return this.props.isFetching === true
      ? <Loading />
      : <div className={container}>
          <Navigation isAuthed={this.props.isAuthed} />
          <div className={innerContainer}>
            {this.props.children}
          </div>
        </div>
  }
}

const { node, bool, func, object } = PropTypes

MainContainer.propTypes = {
  children: node.isRequired,
  location: object.isRequired,
  isAuthed: bool.isRequired,
  isFetching: bool.isRequired,
  removeFetchingUser: func.isRequired,
  authUser: func.isRequired,
  fetchingUserSuccess: func.isRequired,
}

MainContainer.contextTypes = {
  router: object.isRequired
}

function mapStateToProps ({users}) {
  return {
    isAuthed: users.get('isAuthed'),
    isFetching: users.get('isFetching'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
