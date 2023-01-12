import { useState } from "react";
import "./App.css";

// mã hàng (SKU): ví dụ SP001
// Tên: ví dụ Lego Bumblebee
// loại ngành hàng:  tạo select option với các giá trị (toys, food, education, book)
// số lượng
// giá nhập
// giá bán

function App() {
  const [formState, setFormState] = useState({
    productId: "",
    productName: "",
    productType: "Apple",
    productQuantity: "",
    productImportPrice: "",
    productSalePrice: "",
  });

  const handleChangeInputForm = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form className="App" onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor="product_id">Mã Hàng: </label>
        <input
          id="product_id"
          name="productId"
          type="text"
          value={formState.productId} // => Controlled Component
          onChange={handleChangeInputForm}
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
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
