const CardProduct = (props) => {
  const { srcImg, nameProduct, onClick } = props

  return <div onClick={onClick} style={{ cursor: 'pointer' }}>
    <img width={200} height={150} src={srcImg} alt="asd" />
    <h4>{nameProduct}</h4>
  </div>
}

export default CardProduct
