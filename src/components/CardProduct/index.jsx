const CardProduct = (props) => {
  const { srcImg, nameProduct } = props

  return <div>
    <img src={srcImg} alt="#" />
    <h3>{nameProduct}</h3>
  </div>
}

export default CardProduct
