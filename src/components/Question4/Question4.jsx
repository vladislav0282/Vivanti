import React from "react";
import style from "./question4.module.css";
import { useNavigate } from "react-router-dom";
import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg4 from "../../assets/questImg4.svg";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  getOptionVal,
  getOptionValSelector,
} from "../../redux/slices/optionSlice";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    height: "44px",
    width: "343px",
  }),
};

const options = [
  { value: "0", label: "Каджый день (0 баллов)" },
  { value: "1", label: "Не каждый день (1 балл)" },
];

const Question4 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const optionVal = useSelector(getOptionValSelector);

  const optionValueHandler = (options) => {
    dispatch(getOptionVal(options.value));
  };

  const goBackHandler = () => {
    navigate("/question3");
  };

  const goForwardHandler = () => {
    if (optionVal) {
      navigate("/question5");
    }
    return;
  };

  return (
    <div className={style.container}>
      <div>
        <div className={style.container_wrap_p1}>
          <p className={style.p1}>Вопрос 4/8</p>
        </div>
        <div className={style.container_textInput}>
          <div className={style.container_textInput_label}>
            <label htmlFor="select">
              Как часто Ваш пациент ест овощи, фрукты или ягоды?
            </label>
          </div>
          <div style={{ width: "343px" }}>
            <Select
              components={{
                IndicatorSeparator: () => null,
              }}
              onChange={optionValueHandler}
              dropdownAlign={{ offset: [0, 0] }}
              options={options}
              styles={customStyles}
              getOptionLabel={(option) => option.label}
              placeholder="Каджый день (0 баллов)"
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  text: "#ffffff",
                  primary25: "#E46F50",
                  primary: "#E46F50",
                },
              })}
            />
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
        <img src={questImg4} alt="questImg4" layout="intrinsic" />
      </div>
    </div>
  );
};

export default Question4;
