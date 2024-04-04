import React from "react";
import style from "./question1.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg1 from "../../assets/questImg1.svg";
import { getAge, getAgeSelector } from "../../redux/slices/ageSlice";
import { useDispatch, useSelector } from "react-redux";

const Question1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const age = useSelector(getAgeSelector);

  const ageHandleChange = (event) => {
    dispatch(getAge(event.target.value));
  };

  const goBackHandler = () => {
    navigate("/");
  };

  const goForwardHandler = () => {
    if (age) {
      navigate("/question2");
    }
    return;
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 1/8</p>
        </div>
        <div className={style.container_textInput}>
          <div className={style.container_textInput_label}>
            <label htmlFor="age">Введите возраст Вашего пациента</label>
          </div>
          <input
            className={style.container_textInput_input}
            value={age}
            onChange={ageHandleChange}
            id="age"
            type="text"
            placeholder="Текст"
          />
          <p className={style.container_textInput_p}>
            До 45 лет (0 баллов), 45—54 года (2 балла),
          </p>
          <p className={style.container_textInput_p}>
            55—64 года (3 балла), cтарше 65 лет (4 балла)
          </p>
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
        <img src={questImg1} alt="questImg1" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question1;
