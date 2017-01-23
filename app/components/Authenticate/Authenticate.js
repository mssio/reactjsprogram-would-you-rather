import React, { PropTypes } from 'react'
import { FacebookAuthButton } from 'components'
import { centeredContainer, largeHeader, errorMsg } from 'sharedStyles/styles.css'

const { string, bool, func } = PropTypes

Authenticate.propTypes = {
  error: string.isRequired,
  isFetching: bool.isRequired,
  onAuth: func.isRequired,
}

export default function Authenticate ({isFetching, onAuth, error}) {
  return (
    <div className={centeredContainer}>
      <h1 className={largeHeader}>{'Authenticate'}</h1>
      <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}
