/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const optionSlice = createSlice({
  name: "optionVal",
  initialState: initState.optionVal,
  reducers: {
    getOptionVal(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getOptionVal } = optionSlice.actions;
export const getOptionValSelector = (state) => state.optionVal;
export const optionValReducer = optionSlice.reducer;
