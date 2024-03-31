import React from "react";
import style from "./question8.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg8 from "../../assets/questImg8.svg";

const Question8 = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/question7");
  };

  const goForwardHandler = () => {
    navigate("/result1");
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
              <input type="checkbox" />
              <p>Нет</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>Да: дедушка/бабушка, тетя/дядя, двоюродные братья, сестры</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
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
