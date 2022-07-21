import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    subscription: (state, action) => {
      if (state.currentUser.subscribeUsers.includes(action.payload)) {
        state.currentUser.subscribeUsers.spice(
          (channelId) => (channelId = action.payload),
          1
        );
      } else {
        state.currentUser.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout, subscription } =
  userSlice.actions;
export default userSlice.reducer;
