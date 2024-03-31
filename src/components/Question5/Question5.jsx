import React from "react";
import style from "./question5.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg5 from "../../assets/questImg5.svg";

const Question5 = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/question4");
  };

  const goForwardHandler = () => {
    navigate("/question6");
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 5/8</p>
        </div>
        <div className={style.container_textInput}>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            Занимается ли Ваш пациент физическими упражнениями? Выполняет ли он
            <br />
            физические упражнения по 30 минут каждый день или 3 часа в течение
            недели?
          </p>
        </div>
        <div className={style.container_col_check}>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>Да</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>Нет</p>
            </div>
          </div>
          <div className={style.container_col_check_men}>
            <div className={style.container_col_check_input}>
              <p>(0 баллов)</p>
            </div>
            <div className={style.container_col_check_input}>
              <p>(2 балла)</p>
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
        <img src={questImg5} alt="questImg5" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question5;
