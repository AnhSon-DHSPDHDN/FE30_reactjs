import React from 'react'
import { useSelector } from 'react-redux';
import './HomePage.scss'

const ProductTable = () => {
  const products = useSelector(state => state.products.products)
  console.log(products, 'products');

  return (
    <div className='product-table-wrapper'>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Mã Hàng</th>
            <th>Tên sản phẩm</th>
            <th>Loại ngành hàng</th>
            <th>Số lượng</th>
            <th>Giá nhập</th>
            <th>Giá bán</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return <tr key={index}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productType}</td>
              <td>{product.productQuantity}</td>
              <td>Giá nhập</td>
              <td>Giá bán</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
