import React from 'react'
import Card from '../Card'

export default function Main(props) {
  return (
    <div>
      <h3>Main</h3>
      <Card {...props} />
    </div>
  )
}
