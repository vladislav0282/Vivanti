import React from "react";
import style from "./question7.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg7 from "../../assets/questImg7.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getSugarCheck,
  getSugarCheckSelector,
} from "../../redux/slices/sugarCheckSlice";

const Question7 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sugarCheck = useSelector(getSugarCheckSelector);

  function sugarCheckHandler(e) {
    dispatch(getSugarCheck(e.target.value));
  }

  const goBackHandler = () => {
    navigate("/question6");
  };

  const goForwardHandler = () => {
    if (sugarCheck) {
      navigate("/question8");
    }
    return;
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 7/8</p>
        </div>
        <div className={style.container_textInput}>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            Обнаруживали ли у Вашего пациента повышение глюкозы (сахара) в крови
            выше нормы
            <br />
            (во время диспансеризации, проф. осмотра, во время болезни или
            беременности)?
          </p>
        </div>
        <div className={style.container_col_check}>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <input
                value={0}
                type="radio"
                name="sugar"
                onChange={sugarCheckHandler}
              />
              <p>Нет</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                value={1}
                type="radio"
                name="sugar"
                onChange={sugarCheckHandler}
              />
              <p>Да</p>
            </div>
          </div>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <p>(0 баллов)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(1 балл)</p>
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
        <img src={questImg7} alt="questImg7" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question7;
