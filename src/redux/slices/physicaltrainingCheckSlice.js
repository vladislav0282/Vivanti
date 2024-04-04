/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const physicaltrainingCheckSlice = createSlice({
  name: "physicaltrainingCheck",
  initialState: initState.physicaltrainingCheck,
  reducers: {
    getPhysicaltrainingCheck(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getPhysicaltrainingCheck } = physicaltrainingCheckSlice.actions;
export const getPhysicaltrainingSelector = (state) =>
  state.physicaltrainingCheck;
export const physicaltrainingCheckReducer = physicaltrainingCheckSlice.reducer;
