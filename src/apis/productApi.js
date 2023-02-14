// Define all function call API product feature

import axios from "axios";
import { BE_URL } from "../constants/config";

export const fetchAllDataProduct = async () => {
  const { data } = await axios.get(`${BE_URL}products`); //Call API and get all Data
  return data;
};

export const fetchDataProductById = async (id) => {
  const { data } = await axios.get(`${BE_URL}products/${id}`); //Call API get data product by ID
  return data;
};

export const deleteProductById = async (id) => {
  return await axios.delete(`${BE_URL}products/${id}`); //Call API delete product by ID
};

export const fetchCreateProduct = async (product) => {
  return await axios.post(`${BE_URL}products`, product); // Truyền data product vào body để server nhận được data và tạo bản ghi product mới
};

//Edit product
export const fetchUpdateProductById = async (id, payload) => {
  return await axios.put(`${BE_URL}products/${id}`, payload);
};
// Chức năng edit giống với chức năng thêm mới, chỉ khác url có thêm ID. mọi người tự tìm hiểu làm nhé. mình làm đến đây thôi :D
