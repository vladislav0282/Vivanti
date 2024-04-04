/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const medicamentCheckSlice = createSlice({
  name: "medicamentCheck",
  initialState: initState.medicamentCheck,
  reducers: {
    getMedicamentCheck(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getMedicamentCheck } = medicamentCheckSlice.actions;
export const getMedicamentCheckSelector = (state) => state.medicamentCheck;
export const medicamentCheckReducer = medicamentCheckSlice.reducer;
