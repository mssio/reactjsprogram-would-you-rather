import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as modalActionCreators from 'redux/modules/modal'
import { Modal } from 'components'

function mapStateToProps ({modal, users}) {
  const isSubmitDisabled =
    modal.get('titleText').length <= 0 ||
    modal.get('firstOptionText').length <= 0 ||
    modal.get('secondOptionText').length <= 0

  return {
    user: users.get(users.get('authedId')) ? users.getIn([users.get('authedId'), 'info']) : {},
    titleText: modal.get('titleText'),
    firstOptionText: modal.get('firstOptionText'),
    secondOptionText: modal.get('secondOptionText'),
    isOpen: modal.get('isOpen'),
    isSubmitDisabled: isSubmitDisabled,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(modalActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
