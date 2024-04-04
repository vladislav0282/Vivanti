import React from "react";
import style from "./question3.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg3 from "../../assets/questImg3.svg";
import {
  getCheckBodySelector,
  getCheckBodyValue,
} from "../../redux/slices/checkBodySlice";
import { useDispatch, useSelector } from "react-redux";

const Question3 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkBodyValue = useSelector(getCheckBodySelector);

  const checkBodyHandleChange = (e) => {
    dispatch(getCheckBodyValue(e.target.value));
  };

  const goBackHandler = () => {
    navigate("/question2");
  };

  const goForwardHandler = () => {
    if (checkBodyValue) {
      navigate("/question4");
    }
    return;
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 3/8</p>
        </div>
        <div className={style.container_textInput}>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            Окружность талии также указывает на наличие избыточного веса или
            ожирения.
          </p>
        </div>
        <div className={style.container_col_check}>
          <div className={style.container_col_check_men}>
            <p>Мужчины</p>
            <div className={style.container_col_check_input}>
              <input
                id="1"
                type="radio"
                name="gender"
                value={0}
                //checked={isCheckBody}
                onChange={checkBodyHandleChange}
              />
              <p>{"<"} 94 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                id="2"
                type="radio"
                name="gender"
                value={3}
                //checked={isCheckBody}
                onChange={checkBodyHandleChange}
              />
              <p>94—102 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                id="3"
                type="radio"
                name="gender"
                value={4}
                //checked={isCheckBody}
                onChange={checkBodyHandleChange}
              />
              <p>{">"} 102 см</p>
            </div>
          </div>
          <div className={style.container_col_check_men}>
            <p>Женщины</p>
            <div className={style.container_col_check_input}>
              <input
                id="4"
                type="radio"
                name="gender"
                value={0}
                //checked={isCheckBody}
                onChange={checkBodyHandleChange}
              />
              <p>{"<"} 80 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                value={3}
                id="5"
                type="radio"
                name="gender"
                //checked={isCheckBody}
                onChange={checkBodyHandleChange}
              />
              <p>80—88 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                value={4}
                id="6"
                type="radio"
                name="gender"
                //checked={isCheckBody}
                onChange={checkBodyHandleChange}
              />
              <p>{">"} 88 см</p>
            </div>
          </div>
          <div className={style.container_col_check_total}>
            <div className={style.container_col_check_input}>
              <p>(0 баллов)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(3 балла)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(4 балла)</p>
            </div>
          </div>
        </div>
        <div className={style.container_buttons}>
          <button
            onClick={goBackHandler}
            className={style.buttonBack}
            type="button"
          >
            <div className={style.buttonBack_wrap}>
              <img
                src={foundationArrowLeft}
                alt="foundationArrowUp"
                layout="intrinsic"
              />
              <p className={style.buttonBack_Text}>Назад</p>
            </div>
          </button>
          <button
            onClick={goForwardHandler}
            className={style.buttonForward}
            type="button"
          >
            <div className={style.buttonBack_wrap}>
              <p className={style.buttonFovard_Text}>Далее</p>
              <img
                src={foundationArrowRight}
                alt="foundationArrowUp"
                layout="intrinsic"
              />
            </div>
          </button>
        </div>
      </div>
      <div className={style.container_wrap_imgQuest1}>
        <img src={questImg3} alt="questImg3" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question3;
