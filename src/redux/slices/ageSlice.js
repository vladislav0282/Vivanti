/* eslint-disable no-return-assign */
import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../initState";

const ageSlice = createSlice({
  name: "age",
  initialState: initState.age,
  reducers: {
    getAge(state, action) {
      return (state = action.payload);
      //   console.log(state);
      //   if (state < 45) {
      //     return (state = 0);
      //   }
      //   if (state >= 45 && state <= 54) {
      //     return (state = 2);
      //   }
      //   if (state >= 55 && state <= 64) {
      //     return (state = 3);
      //   }
      //   if (state > 65) {
      //     return (state = 4);
      //   }

      // },
    },
  },
});

export const { getAge, getAgeResult } = ageSlice.actions;
export const getAgeSelector = (state) => state.age;
export const ageReducer = ageSlice.reducer;
