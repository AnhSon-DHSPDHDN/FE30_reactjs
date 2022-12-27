import CardImgs from "./CardImg"
import CardPrice from "./CardPrice"
import CardTitle from "./CardTitle"

const CardProduct = (props) => {
  const { srcImg, nameProduct } = props

  return <div>
    <CardImgs />
    <CardTitle />
    <CardPrice />
  </div>
}

export default CardProduct
