import React, { PropTypes } from 'react'
import { button } from './styles.css'

const { bool, func } = PropTypes

FacebookAuthButton.propTypes = {
  isFetching: bool.isRequired,
  onAuth: func.isRequired,
}

export default function FacebookAuthButton ({isFetching, onAuth}) {
  return (
    <button onClick={onAuth} className={button}>
      { isFetching === true
        ? 'Loading'
        : 'Login with Facebook' }
    </button>
  )
}
