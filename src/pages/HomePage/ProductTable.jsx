import React from 'react'
import './HomePage.scss'

const ProductTable = () => {
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
          <tr>
            <td>Mã Hàng</td>
            <td>Tên sản phẩm</td>
            <td>Loại ngành hàng</td>
            <td>Số lượng</td>
            <td>Giá nhập</td>
            <td>Giá bán</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable
