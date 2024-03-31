import React from "react";
import style from "./result1.module.css";
import { useNavigate } from "react-router-dom";
import result from "../../assets/result.svg";
import startImage from "../../assets/startImg.svg";
import reload from "../../assets/reload.svg";

const Result1 = () => {
  const navigate = useNavigate();

  const goCalculateHandler = () => {
    navigate("/calculation");
  };

  const goStartdHandler = () => {
    navigate("/");
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Результат</p>
        </div>
        <div className={style.container_textInput}>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            Низкий риск развития СД 2 типа, вероятность 1%.
          </p>
          <p className={style.container_p} style={{ marginBottom: "20px" }}>
            У Вашего пациента хорошее здоровье. Рекомендуется продолжать вести
            здоровый образ жизни!
          </p>
        </div>

        <div className={style.container_buttons}>
          <button
            onClick={goCalculateHandler}
            className={style.buttonBack}
            type="button"
          >
            <div className={style.buttonBack_wrap}>
              <img src={result} alt="result" layout="intrinsic" />
              <p className={style.buttonBack_Text}>
                Методология подсчета результата
              </p>
            </div>
          </button>
          <button
            onClick={goStartdHandler}
            className={style.buttonForward}
            type="button"
          >
            <div className={style.buttonBack_wrap}>
              <img src={reload} alt="reload" layout="intrinsic" />
              <p className={style.buttonFovard_Text}>Пройти тест заново</p>
            </div>
          </button>
        </div>
      </div>
      <div className={style.container_wrap_imgQuest1}>
        <img src={startImage} alt="startImage" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Result1;
