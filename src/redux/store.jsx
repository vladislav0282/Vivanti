import { configureStore } from "@reduxjs/toolkit";
import { gitInitState } from "./initState";
import { REDUX_LS_KEY } from "../utils/constants";
import { ageReducer } from "./slices/ageSlice";
import { indexBodyWeightReducer } from "./slices/indexBodyWeightSlice";
import { checkBodyReducer } from "./slices/checkBodySlice";
import { optionValReducer } from "./slices/optionSlice";
import { physicaltrainingCheckReducer } from "./slices/physicaltrainingCheckSlice";
import { medicamentCheckReducer } from "./slices/medicamentCheckSlice";
import { sugarCheckReducer } from "./slices/sugarCheckSlice";
import { sugarParentCheckReducer } from "./slices/sugarParentCheckSlice";
import { totalResultReducer } from "./slices/totalResultSlice";

export const store = configureStore({
  reducer: {
    age: ageReducer,
    indexBodyWeight: indexBodyWeightReducer,
    checkBodyValue: checkBodyReducer,
    optionVal: optionValReducer,
    physicaltrainingCheck: physicaltrainingCheckReducer,
    medicamentCheck: medicamentCheckReducer,
    sugarCheck: sugarCheckReducer,
    sugarParentCheck: sugarParentCheckReducer,
    totalResult: totalResultReducer,
  },
  preloadedState: gitInitState(),
});

store.subscribe(() =>
  window.localStorage.setItem(REDUX_LS_KEY, JSON.stringify(store.getState()))
);
