import Question1 from "./components/Question1/Question1";
import Question2 from "./components/Question2/Question2";
import Question3 from "./components/Question3/Question3";
import Question4 from "./components/Question4/Question4";
import Question5 from "./components/Question5/Question5";
import Question6 from "./components/Question6/Question6";
import Question7 from "./components/Question7/Question7";
import Question8 from "./components/Question8/Question8";
import {
  QUESTION_1,
  QUESTION_2,
  QUESTION_3,
  QUESTION_4,
  QUESTION_5,
  QUESTION_6,
  QUESTION_7,
  QUESTION_8,
} from "./utils/constants";

export const publicRouters = [
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
];
