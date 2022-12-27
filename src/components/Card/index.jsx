import React from 'react'

export default function Card(props) {
  const { handleBuyPhone } = props

  return (<div>
    <h1>Sản phẩm mới nhất:</h1>
    <h3>{props.cardTitle}</h3>
    <h3>{props.cardPrice}</h3>
    <h3>{props.cardDes}</h3>
    <button onClick={() => handleBuyPhone(props.cardTitle)}>Buy IP promax</button>
  </div>
  )
}
