import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actDeleteProduct, actFetchAllProduct } from '../../redux/features/products/productsSlice'
import './HomePage.scss'

const ProductTable = () => {
  const dispatch = useDispatch()
  const { allProducts, isLoading } = useSelector(state => state.products)

  //Get all Data products to show screen
  useEffect(() => {
    dispatch(actFetchAllProduct())
  }, [])

  const renderDataProducts = (products) => {
    return products.map((product) => <tr key={product?.id}>
      <td>{product?.productCode}</td>
      <td>{product?.productName}</td>
      <td>{product?.productType}</td>
      <td>{product?.productQuantity}</td>
      <td>{product?.productImportPrice}</td>
      <td>{product?.productSalePrice}</td>
      <td>
        <button onClick={() => handleDeleteProduct(product.id)}>Del</button>
        <button>Edit</button>
      </td>
    </tr>)
  }

  const handleDeleteProduct = (id) => {
    dispatch(actDeleteProduct(id))
  }

  return (
    <div className='product-table-wrapper'>
      {isLoading
        ? <div>Loading...</div>
        : <table className='product-table'>
          <thead>
            <tr>
              <th>Mã Hàng</th>
              <th>Tên sản phẩm</th>
              <th>Loại ngành hàng</th>
              <th>Số lượng</th>
              <th>Giá nhập</th>
              <th>Giá bán</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renderDataProducts(allProducts)}
          </tbody>
        </table>}
    </div>
  )
}

export default ProductTable
