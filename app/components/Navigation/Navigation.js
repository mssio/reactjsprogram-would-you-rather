import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { container, navContainer, link } from './styles.css'

const { bool } = PropTypes

NavLinks.propTypes = ActionLinks.propTypes = Navigation.propTypes = {
  isAuthed: bool.isRequired,
}

function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
      </ul>
    : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
        <li>{'Modal Container'}</li>
        <li><Link className={link} to='/logout'>{'Logout'}</Link></li>
      </ul>
    : <ul>
        <li><Link className={link} to='/'>{'Home'}</Link></li>
        <li><Link className={link} to='/auth'>{'Authenticate'}</Link></li>
      </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className={container}>
      <nav className={navContainer}>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}
