import { configureStore } from "@reduxjs/toolkit";
import { tagsReducer } from "./tags/tagsSlice";
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    tags: tagsReducer,
  },
});
