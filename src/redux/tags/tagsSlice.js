import { createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tagsSlice = createSlice({
  name: "tags",
  initialState: {
    items: [],
    total: 0,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, handlePending)
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchTags.rejected, handleRejected);
  },
});

export const tagsReducer = tagsSlice.reducer;
