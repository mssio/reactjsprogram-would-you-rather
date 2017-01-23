import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import getRoutes from './config/routes'

ReactDOM.render(
  <div>
    {getRoutes(hashHistory)}
  </div>,
  document.getElementById('app')
)
