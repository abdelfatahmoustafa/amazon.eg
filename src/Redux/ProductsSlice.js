import { BASE_API } from "../config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axios.get(`${BASE_API}api/v1/products`);
      console.log("🚀 ~ ProductsSlice.js:13 ~ data:", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { data: [] };

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const productsReducer = productsSlice.reducer;
