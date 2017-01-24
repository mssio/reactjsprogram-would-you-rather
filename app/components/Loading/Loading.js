import React from 'react'
import { container, image } from './styles.css'

export default function Loading (props) {
  return (
    <div className={container}>
      <img className={image} src='https://storage.googleapis.com/would-you-rather-e59e2.appspot.com/loading.svg' />
    </div>
  )
}
