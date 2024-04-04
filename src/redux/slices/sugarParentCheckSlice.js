/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const sugarParentCheckSlice = createSlice({
  name: "sugarParentCheck",
  initialState: initState.sugarParentCheck,
  reducers: {
    getSugarParentCheck(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getSugarParentCheck } = sugarParentCheckSlice.actions;
export const getSugarParentCheckSelector = (state) => state.sugarParentCheck;
export const sugarParentCheckReducer = sugarParentCheckSlice.reducer;
