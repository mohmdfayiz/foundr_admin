import { createSlice } from "@reduxjs/toolkit";

export const authorizerSlice = createSlice({
  name: "authorizer",
  initialState: {
    authorized: false,
  },
  reducers: {
    setAuthorized: (state) => {
      state.authorized = true;
    },
    setUnauthorized: (state) => {
      state.authorized = false;
    },
  },
});

export const { setAuthorized, setUnauthorized } = authorizerSlice.actions;
export default authorizerSlice.reducer;
