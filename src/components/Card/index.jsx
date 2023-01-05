import React from 'react'

export default function Card(props) {
  const { name, img } = props.data

  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={img} />
    </div>
  )
}
