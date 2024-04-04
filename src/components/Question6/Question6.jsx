import React from "react";
import style from "./question6.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg6 from "../../assets/questImg6.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getMedicamentCheck,
  getMedicamentCheckSelector,
} from "../../redux/slices/medicamentCheckSlice";

const Question6 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const medicamentCheck = useSelector(getMedicamentCheckSelector);

  function medicamentCheckHandler(e) {
    dispatch(getMedicamentCheck(e.target.value));
  }

  const goBackHandler = () => {
    navigate("/question5");
  };

  const goForwardHandler = () => {
    if (medicamentCheck) {
      navigate("/question7");
    }
    return;
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 6/8</p>
        </div>
        <div className={style.container_textInput}>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            Принимал ли Ваш пациент когда-либо регулярно лекарства для снижения
            артериального давления?
          </p>
        </div>
        <div className={style.container_col_check}>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <input
                value={2}
                type="radio"
                onChange={medicamentCheckHandler}
                name="medicament"
              />
              <p>Да</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                value={0}
                type="radio"
                onChange={medicamentCheckHandler}
                name="medicament"
              />
              <p>Нет</p>
            </div>
          </div>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <p>(2 балла)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(0 баллов)</p>
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
        <img src={questImg6} alt="questImg6" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question6;
