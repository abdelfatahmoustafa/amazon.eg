import axios from "axios";
import { BASE_API } from "../config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getCategoryDetails = createAsyncThunk(
  "categoryDetailsSlice/getCategoryDetails",
  async (id) => {
    try {
      const { data } = await axios.get(`${BASE_API}api/v1/categories/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { data: [] };

const categoryDetailsSlice = createSlice({
  name: "categoryDetailsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryDetails.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const categoryDetailsSliceReducer = categoryDetailsSlice.reducer;
