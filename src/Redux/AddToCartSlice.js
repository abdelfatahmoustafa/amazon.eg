import axios from "axios";
import { BASE_API } from "../config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addToCart = createAsyncThunk(
  "addToCart/addToCartData",
  async (productId) => {
    try {
      const { data } = await axios.post(
        `${BASE_API}api/v1/cart`,
        { productId: productId },
        { headers: { token: localStorage.getItem("userToken") } }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { data: [] };

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const addToCartSliceReducer = addToCartSlice.reducer;
