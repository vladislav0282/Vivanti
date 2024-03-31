import React from "react";
import style from "./question3.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg3 from "../../assets/questImg3.svg";

const Question3 = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/question2");
  };

  const goForwardHandler = () => {
    navigate("/question4");
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
              <input type="checkbox" />
              <p>{"<"} 94 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>94—102 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>{">"} 102 см</p>
            </div>
          </div>
          <div className={style.container_col_check_men}>
            <p>Женщины</p>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>{"<"} 80 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
              <p>80—88 см</p>
            </div>
            <div className={style.container_col_check_input}>
              <input type="checkbox" />
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
