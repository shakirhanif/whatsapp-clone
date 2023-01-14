import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: { accountState: null },
  reducers: {
    setAccount(state, action) {
      state.accountState =
        "redux is setup successfully horraaa!!!!!!" + action.payload;
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice;
