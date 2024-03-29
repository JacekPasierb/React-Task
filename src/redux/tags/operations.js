import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.stackexchange.com/2.3/";

export const fetchTags = createAsyncThunk(
  "tags/fetchAll",
  async (pageSize, thunkAPI) => {
    try {
      const response = await axios.get(
        `tags?pagesize=${pageSize}&order=desc&min=10&sort=popular&site=stackoverflow&filter=!bMsg5CXICdlFSp`
      );
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
