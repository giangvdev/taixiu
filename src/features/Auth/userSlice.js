import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../actions/api/userApi";

const initialState = {
  current: {},
  settings: {},
  isLoading: false,
  error: "",
}

export const fetchRegister = createAsyncThunk(
   'user/register',
   async (data)  => {
     const response = await userApi.register(data);

     localStorage.setItem('access_token', response.data.jwt);
     localStorage.setItem('user', JSON.stringify(response.data.user));

     return console.log(response.user)
     
   }
)


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchRegister.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.current = action.payload
    })
    builder.addCase(fetchRegister.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload ? action.payload.errorMessage : action.error
    })

  }


});
const { reducer } = userSlice;
export default reducer;
