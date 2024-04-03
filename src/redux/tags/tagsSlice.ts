import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTags } from "./operations";

const handlePending = (state: TagsState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (
  state: TagsState,
  action: PayloadAction<unknown, string, any, any>
) => {
  state.isLoading = false;
  state.error = action.payload as string | null;
};
interface Tag {
  name: string;
  count: number;
}
interface TagsState {
  items: Tag[];
  total: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: TagsState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, handlePending)
      .addCase(
        fetchTags.fulfilled,
        (
          state: TagsState,
          action: PayloadAction<{ items: Tag[]; total: number }>
        ) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload.items;
          state.total = action.payload.total;
        }
      )
      .addCase(fetchTags.rejected, handleRejected);
  },
});

export const tagsReducer = tagsSlice.reducer;
