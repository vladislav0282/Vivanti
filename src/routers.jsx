import Calculate from "./components/Calculate/Calculate";
import Question1 from "./components/Question1/Question1";
import Question2 from "./components/Question2/Question2";
import Question3 from "./components/Question3/Question3";
import Question4 from "./components/Question4/Question4";
import Question5 from "./components/Question5/Question5";
import Question6 from "./components/Question6/Question6";
import Question7 from "./components/Question7/Question7";
import Question8 from "./components/Question8/Question8";
import Result1 from "./components/Result1/Result1";
import Result2 from "./components/Result2/Result2";
import Result3 from "./components/Result3/Result3";
import Result4 from "./components/Result4/Result4";
import Result5 from "./components/Result5/Result5";
import Start from "./components/Start/Start";
import {
  CALCULATE,
  QUESTION_1,
  QUESTION_2,
  QUESTION_3,
  QUESTION_4,
  QUESTION_5,
  QUESTION_6,
  QUESTION_7,
  QUESTION_8,
  RESULT_1,
  RESULT_2,
  RESULT_3,
  RESULT_4,
  RESULT_5,
  START,
} from "./utils/constants";

export const publicRouters = [
  {
    path: START,
    element: <Start />,
  },
  {
    path: QUESTION_1,
    element: <Question1 />,
  },
  {
    path: QUESTION_2,
    element: <Question2 />,
  },
  {
    path: QUESTION_3,
    element: <Question3 />,
  },
  {
    path: QUESTION_4,
    element: <Question4 />,
  },
  {
    path: QUESTION_5,
    element: <Question5 />,
  },
  {
    path: QUESTION_6,
    element: <Question6 />,
  },
  {
    path: QUESTION_7,
    element: <Question7 />,
  },
  {
    path: QUESTION_8,
    element: <Question8 />,
  },
  {
    path: RESULT_1,
    element: <Result1 />,
  },
  {
    path: RESULT_2,
    element: <Result2 />,
  },
  {
    path: RESULT_3,
    element: <Result3 />,
  },
  {
    path: RESULT_4,
    element: <Result4 />,
  },
  {
    path: RESULT_5,
    element: <Result5 />,
  },
  {
    path: CALCULATE,
    element: <Calculate />,
  },
];
