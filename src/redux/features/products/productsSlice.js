import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteProductById,
  fetchAllDataProduct,
  fetchCreateProduct,
} from "../../../apis/productApi";

const initialState = {
  allProducts: [],
  product: {},
  isLoading: false,
  isLoadingCreate: false,
  isLoadingDelete: false,
  errors: {},
};

// Create middleware handle call API
export const actFetchAllProduct = createAsyncThunk(
  "users/fetchLogin",
  async () => {
    const data = await fetchAllDataProduct(); // Call func call data products
    return data || [];
  }
);

export const productsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    actUpdateLoadingCreate: (state, action) => {
      state.isLoadingCreate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actFetchAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(actFetchAllProduct.rejected, (state) => {
      // Các bạn có thể thêm các message lỗi để hiển thị ở đây, mình chỉ cho 1 VD lỗi như dưới
      state.errors = {
        errors: "Đã xảy ra lỗi khi gọi api",
        code: "",
      };
      state.isLoading = false;
    });
    builder.addCase(actFetchAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload || [];
    });
  },
});

//Create middleware call create product
export const actCreateProduct = (product) => async (dispatch) => {
  try {
    dispatch(actUpdateLoadingCreate(true)); //Update status loading
    await fetchCreateProduct(product);
    await dispatch(actFetchAllProduct()); // Call API get ALL product to get new data
  } catch (error) {
    // handle error to show screen
    console.log(error);
  } finally {
    dispatch(actUpdateLoadingCreate(false)); //Update status loading when call API success
  }
};

export const actDeleteProduct = (id) => async (dispatch) => {
  try {
    await deleteProductById(id); // Call API delete Product
    dispatch(actFetchAllProduct()); // Call API get ALL product to get new data
  } catch (error) {
    // handle error to show screen
    console.log(error);
  }
};

export const { actUpdateLoadingCreate } = productsSlice.actions;

export default productsSlice.reducer;
