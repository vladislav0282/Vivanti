/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const totalResultSlice = createSlice({
  name: "totalResult",
  initialState: initState.totalResult,
  reducers: {
    getTotalResult(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getTotalResult } = totalResultSlice.actions;
export const getTotalResultSelector = (state) => state.totalResult;
export const totalResultReducer = totalResultSlice.reducer;
