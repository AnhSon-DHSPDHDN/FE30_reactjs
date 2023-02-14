import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actCreateProduct } from '../../redux/features/products/productsSlice';
import './HomePage.scss'

const initialFormValue = {
  productCode: "",
  productName: "",
  productType: "Apple",
  productQuantity: "",
  productImportPrice: "",
  productSalePrice: "",
}

const ProductForm = () => {
  const dispatch = useDispatch()
  const [formState, setFormState] = useState(initialFormValue);

  const handleChangeInputForm = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(actCreateProduct(formState))
    setFormState(initialFormValue)
  };

  return (
    <div className="product-form-wrapper">
      <form className='product-form' onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="product_id">Mã Hàng: </label>
          <input
            id="product_id"
            name="productCode"
            type="text"
            value={formState.productCode} // => Controlled Component
            onChange={handleChangeInputForm}
            required
          />
        </div>
        <div>
          <label htmlFor="product_name">Tên Hàng: </label>
          <input
            id="product_name"
            name="productName"
            type="text"
            value={formState.productName} // => Controlled Component
            onChange={handleChangeInputForm}
            required
          />
        </div>
        <div>
          <label htmlFor="product_type">Loại Ngành Hàng: </label>
          <select
            name="productType"
            id="product_type"
            onChange={handleChangeInputForm}
            value={formState.productType}
          >
            <option value="Apple">Apple</option>
            <option value="SamSung">SamSung</option>
            <option value="Xiao Mi">Xiao Mi</option>
            <option value="BPhone">BPhone</option>
          </select>
        </div>
        <div>
          <label htmlFor="product_quantity">Số Lượng: </label>
          <input
            id="product_quantity"
            name="productQuantity"
            type="number"
            value={formState.productQuantity} // => Controlled Component
            onChange={handleChangeInputForm}
            required
          />
        </div>
        <div>
          <label htmlFor="product_import_price">Giá Nhập: </label>
          <input
            id="product_import_price"
            name="productImportPrice"
            type="number"
            value={formState.productImportPrice} // => Controlled Component
            onChange={handleChangeInputForm}
            required
          />
        </div>
        <div>
          <label htmlFor="product_sale_price">Giá Bán: </label>
          <input
            id="product_sale_price"
            name="productSalePrice"
            type="number"
            value={formState.productSalePrice} // => Controlled Component
            onChange={handleChangeInputForm}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm
