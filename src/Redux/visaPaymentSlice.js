import { BASE_API } from "../config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const visaPaymentData = createAsyncThunk(
  "visaPaymentSlice/visaPaymentData",
  async (param) => {
    try {
      const { data } = await axios.post(
        `${BASE_API}api/v1/orders/checkout-session/${param[0].id}?url=http://localhost:3000`,
        { shippingAddress: param[1] },
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { data: [] };

const visaPaymentSlice = createSlice({
  name: "visaPaymentSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(visaPaymentData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(visaPaymentData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(visaPaymentData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const visaPaymentSliceReducer = visaPaymentSlice.reducer;
