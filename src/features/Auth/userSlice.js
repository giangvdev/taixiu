import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
    settings: {},
    isLoading: false,
    error: "",
  },
  reducers: {},
});
const { reducer } = userSlice;
export default reducer;
