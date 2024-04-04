/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const checkBodySlice = createSlice({
  name: "checkBodyValue",
  initialState: initState.checkBodyValue,
  reducers: {
    getCheckBodyValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getCheckBodyValue } = checkBodySlice.actions;
export const getCheckBodySelector = (state) => state.checkBodyValue;
export const checkBodyReducer = checkBodySlice.reducer;
