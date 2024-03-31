import React from "react";
import style from "./question2.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg2 from "../../assets/questImg2.svg";

const Question2 = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/question1");
  };

  const goForwardHandler = () => {
    navigate("/question3");
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 2/8</p>
        </div>
        <div className={style.container_textInput}>
          <div>
            <p className={style.container_p} style={{ marginBottom: "20px" }}>
              Рассчитайте индекс массы тела пациента
            </p>
            <p className={style.container_p} style={{ marginBottom: "28px" }}>
              Индекс массы тела позволяет выявить наличие избыточного веса или
              ожирения
              <br />
              (ИМТ = вес, кг / рост, м2). Если у Вас не получается произвести
              расчет самостоятельно,
              <br />
              воспользуйтесь{" "}
              <a
                className={style.container_p}
                href="https://clinic-cvetkov.ru/company/kalkulyator-imt/"
                target="_blank"
              >
                специальным калькулятором.
              </a>
            </p>
          </div>
          <input
            className={style.container_textInput_input}
            id="age"
            type="text"
            placeholder="Текст"
          />
          <p className={style.container_textInput_p}>
            Менее 25 кг/м2 (0 баллов), 25—30 кг/м2 (1 балл), больше 30 кг/м2
          </p>
          <p className={style.container_textInput_p}>(3 балла)</p>
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
        <img src={questImg2} alt="questImg1" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question2;
