/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const indexBodyWeightSlice = createSlice({
  name: "indexBodyWeight",
  initialState: initState.indexBodyWeight,
  reducers: {
    getIndexBodyWeight(state, action) {
      return (state = action.payload);
    },
  },
});

export const { getIndexBodyWeight } = indexBodyWeightSlice.actions;
export const getIndexBodyWeightSelector = (state) => state.indexBodyWeight;
export const indexBodyWeightReducer = indexBodyWeightSlice.reducer;
