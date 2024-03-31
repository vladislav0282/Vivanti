import React from "react";
import style from "./start.module.css";
import { useNavigate } from "react-router-dom";
import startImage from "../../assets/startImg.svg";

const Start = () => {
  const navigate = useNavigate();

  const goStartHandler = () => {
    navigate("/question1");
  };

  return (
    <div className={style.container}>
      <div className={style.container_wrap}>
        <p className={style.container__wrap_p} style={{ marginBottom: "30px" }}>
          Своевременная диагностика нарушений углеводного обмена крайне важна
          для подбора
          <br />
          корректной АГ-терапии пациентам. Раннее диагностирование позволяет не
          только замедлить
          <br />
          манифестацию СД 2 типа, но и избежать у таких пациентов необратимых
          изменений почечной
          <br />
          ткани на фоне углеводных нарушений и повышенного АД.
        </p>
        <p className={style.container__wrap_p}>
          Дорогой доктор, во время приема Вы можете предложить пациенту пройти
          этот короткий опрос,
          <br />
          чтобы оценить 10-летний риск развития СД 2 типа и дать необходимые
          рекомендации.
        </p>
        <div className={style.container_buttons}>
          <button
            onClick={goStartHandler}
            className={style.buttonForward}
            type="button"
          >
            <div className={style.buttonBack_wrap}>
              <p className={style.buttonFovard_Text}>Начать</p>
            </div>
          </button>
        </div>
      </div>
      <div className={style.container_wrap_img}>
        <img src={startImage} alt="startImage" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Start;
