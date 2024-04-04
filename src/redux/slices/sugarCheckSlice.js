/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const sugarCheckSlice = createSlice({
  name: "sugarCheck",
  initialState: initState.sugarCheck,
  reducers: {
    getSugarCheck(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getSugarCheck } = sugarCheckSlice.actions;
export const getSugarCheckSelector = (state) => state.sugarCheck;
export const sugarCheckReducer = sugarCheckSlice.reducer;
