import React from "react";
import style from "./question8.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg8 from "../../assets/questImg8.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getSugarParentCheck,
  getSugarParentCheckSelector,
} from "../../redux/slices/sugarParentCheckSlice";
import { getAgeSelector } from "../../redux/slices/ageSlice";
import { getIndexBodyWeightSelector } from "../../redux/slices/indexBodyWeightSlice";
import { getCheckBodySelector } from "../../redux/slices/checkBodySlice";
import { getOptionValSelector } from "../../redux/slices/optionSlice";
import { getPhysicaltrainingSelector } from "../../redux/slices/physicaltrainingCheckSlice";
import { getMedicamentCheckSelector } from "../../redux/slices/medicamentCheckSlice";
import { getSugarCheckSelector } from "../../redux/slices/sugarCheckSlice";
import { getTotalResult } from "../../redux/slices/totalResultSlice";

const Question8 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const age = useSelector(getAgeSelector);
  const indexBodyWeight = useSelector(getIndexBodyWeightSelector);
  const checkBodyValue = useSelector(getCheckBodySelector);
  const optionVal = useSelector(getOptionValSelector);
  const physicaltrainingValue = useSelector(getPhysicaltrainingSelector);
  const medicamentCheck = useSelector(getMedicamentCheckSelector);
  const sugarCheck = useSelector(getSugarCheckSelector);
  const sugarParentCheck = useSelector(getSugarParentCheckSelector);
  let ageRating = null;
  let indexBodyWeightRating = null;

  if (+age < 45) {
    ageRating = "0";
  }
  if (+age >= 45 && +age <= 54) {
    ageRating = "2";
  }
  if (+age >= 55 && +age <= 64) {
    ageRating = "3";
  }
  if (+age > 65) {
    ageRating = "4";
  }

  if (+indexBodyWeight < 25) {
    indexBodyWeightRating = "0";
  }
  if (+indexBodyWeight >= 25 && +age <= 30) {
    indexBodyWeightRating = "1";
  }

  if (+indexBodyWeight > 30) {
    indexBodyWeightRating = "3";
  }

  let totalResult =
    +ageRating +
    +indexBodyWeightRating +
    +checkBodyValue +
    +optionVal +
    +physicaltrainingValue +
    +medicamentCheck +
    +sugarCheck +
    +sugarParentCheck;

  dispatch(getTotalResult(totalResult));

  function sugarParentCheckHandler(e) {
    dispatch(getSugarParentCheck(e.target.value));
  }

  const goBackHandler = () => {
    navigate("/question7");
  };

  const goForwardHandler = () => {
    if (sugarParentCheck) {
      if (totalResult < 7) {
        navigate("/result1");
      }
      if (totalResult >= 7 && totalResult <= 11) {
        navigate("/result2");
      }
      if (totalResult >= 12 && totalResult <= 14) {
        navigate("/result3");
      }
      if (totalResult >= 15 && totalResult <= 20) {
        navigate("/result4");
      }
      if (totalResult > 20) {
        navigate("/result5");
      }
    }
    return;
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 8/8</p>
        </div>
        <div className={style.container_textInput}>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            Были ли у Вашего пациента родственники с сахарным диабетом 1 или 2
            типа?
            <br />
            (Выберите один или несколько вариантов ответов).
          </p>
        </div>
        <div className={style.container_col_check}>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <input
                type="radio"
                name="sugarParent"
                value={0}
                onChange={sugarParentCheckHandler}
              />
              <p>Нет</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                type="radio"
                name="sugarParent"
                value={3}
                onChange={sugarParentCheckHandler}
              />
              <p>Да: дедушка/бабушка, тетя/дядя, двоюродные братья, сестры</p>
            </div>
            <div className={style.container_col_check_input}>
              <input
                type="radio"
                name="sugarParent"
                value={5}
                onChange={sugarParentCheckHandler}
              />
              <p>Да: родители, брат/сестра или собственный ребенок</p>
            </div>
          </div>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <p>(0 баллов)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(3 баллa)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(5 баллов)</p>
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
        <img src={questImg8} alt="questImg8" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question8;
