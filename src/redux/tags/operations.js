import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const VITE_API_KEY = import.meta.env.VITE_API_KEY;
const VITE_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const VITE_CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

axios.defaults.baseURL = "https://api.stackexchange.com/2.3/";
axios.defaults.headers.common["Accept-Encoding"] = "gzip, deflate";



export const fetchTags = createAsyncThunk(
  "tags/fetchAll",
  async ({ page, pagesize }, thunkAPI) => {
    try {
      const response = await axios.get(
        `tags?page=${page}&pagesize=${pagesize}&order=desc&min=10&sort=popular&site=stackoverflow&filter=!bMsg5CXICdlFSp`,
        {
          headers: {
            "X-API-Key": VITE_API_KEY,
            "Client-ID": VITE_CLIENT_ID,
            "Client-Secret": VITE_CLIENT_SECRET,
          },
        }
      );
      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchTags = createAsyncThunk(
//   "tags/fetchAll",
//   async (_, thunkAPI) => {
//     let allTags = [];
//     let page = 1;
//     try {
//       while (true) {
//         const response = await axios.get(
//           `tags?page=${page}&pagesize=100&order=desc&min=10&sort=popular&site=stackoverflow&filter=!bMsg5CXICdlFSp`,
//           {
//             headers: {
//               "X-API-Key": VITE_API_KEY,
//               "Client-ID": VITE_CLIENT_ID,
//               "Client-Secret": VITE_CLIENT_SECRET,
//             },
//           }
//         );
//         if (response.data.items.length === 0) break;
//         if (allTags.length === 5000) break;
//         console.log("1", response.data.items);

//         allTags = allTags.concat(response.data.items);
//         console.log("2", allTags);
//         page++;
//       }

//       return allTags;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );