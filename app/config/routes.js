import React from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import { MainContainer, HomeContainer } from 'containers'

export default function getRoutes(history) {
  return (
    <Router history={history}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
      </Router>
    </Router>
  )
}
