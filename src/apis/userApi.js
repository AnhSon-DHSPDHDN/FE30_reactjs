// Define all API for User

import axios from "axios";
import { BE_URL } from "../constants/config";

export const fetchInfoMe = async (email) => {
  return await axios.get(`${BE_URL}users?email=${email}`); // GET user have email  = email
};
