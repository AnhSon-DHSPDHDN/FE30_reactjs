import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { idProduct } = useParams()

  console.log(idProduct);

  useEffect(() => {
    // Handle Call API with ID product
  }, [])

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails
