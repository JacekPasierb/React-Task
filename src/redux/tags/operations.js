import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const VITE_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

axios.defaults.baseURL = "https://api.stackexchange.com/2.3/";
axios.defaults.headers.common["Accept-Encoding"] = "gzip, deflate";

export const fetchTags = createAsyncThunk(
  "tags/fetchAll",
  async ({ page, rowsPerPage, sortBy,sortDirection }, thunkAPI) => {
    try {
      const response = await axios.get(
        `tags?page=${
          page + 1
        }&pagesize=${rowsPerPage}&order=${sortDirection}&sort=${sortBy}&site=stackoverflow&filter=!etHx()B6O(4ma)x7t3RP(S`,
        {
          headers: {
            "X-API-Key": VITE_API_KEY,
            "Client-ID": VITE_CLIENT_ID,
            "Client-Secret": VITE_CLIENT_SECRET,
          },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
