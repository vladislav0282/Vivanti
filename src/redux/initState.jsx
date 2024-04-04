import { REDUX_LS_KEY } from "../utils/constants";

export const initState = {
  age: "",
  indexBodyWeight: "",
  checkBodyValue: "",
  optionVal: "",
  physicaltrainingCheck: "",
  medicamentCheck: "",
  sugarCheck: "",
  sugarParentCheck: "",
  totalResult: 0,
};

export function gitInitState() {
  const dataFromLS = localStorage.getItem(REDUX_LS_KEY);
  return dataFromLS ? JSON.parse(dataFromLS) : initState;
}
