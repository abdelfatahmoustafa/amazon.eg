import { BASE_API } from "../config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk(
  "ProductDetails/getProductDetalis",
  async (id) => {
    const { data } = await axios
      .get(`${BASE_API}api/v1/products/${id}`)
      .catch((error) => {
        console.log(error);
      });
    return data;
  }
);

const initialState = { data: [] };

const productDetails = createSlice({
  name: "ProductDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const productDetailsReducer = productDetails.reducer;
