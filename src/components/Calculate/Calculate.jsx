import React from "react";
import style from "./calculate.module.css";
import { useNavigate } from "react-router-dom";
import diagram12 from "../../assets/diagram12.svg";
import _12 from "../../assets/_12.svg";
import diagram15_20 from "../../assets/diagram15_20.svg";
import _15_20 from "../../assets/15—20.svg";
import diagram14 from "../../assets/diagram14.svg";
import _12_14 from "../../assets/_12_14.svg";
import diagram_20 from "../../assets/diagram_20.svg";
import _20 from "../../assets/_20.svg";

import foundationArrowLeft from "../../assets/foundation_arrow-up.svg";
import foundationArrowRight from "../../assets/Vector.svg";
import questImg3 from "../../assets/questImg3.svg";

const Calculate = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/result1");
  };

  return (
    <div className={style.container}>
      <div className={style.container_wrapTable}>
        <table className={style.container_wrapTable_table}>
          <tr>
            <th className={style.th1}>Общее количество баллов</th>
            <th className={style.th2}>Уровень риска СД 2 типа</th>
            <th className={style.th3}>Вероятность развития СД 2 типа</th>
          </tr>
          <tr>
            <td>Менее 7</td>
            <td className={style.td1_2}>Низкий риск</td>
            <td>1 из 100 или 1%</td>
          </tr>
          <tr>
            <td>7–11</td>
            <td className={style.td2_2}>Слегка повышен</td>
            <td>1 из 25 или 4%</td>
          </tr>
          <tr>
            <td>12–14</td>
            <td className={style.td3_2}>Умеренный</td>
            <td>1 из 6 или 17%</td>
          </tr>
          <tr>
            <td>15–20</td>
            <td className={style.td4_2}>Высокий</td>
            <td>1 из 3 или 33%</td>
          </tr>
          <tr>
            <td>Более 20</td>
            <td className={style.td5_2}>Очень высокий</td>
            <td>1 из 2 или 50%</td>
          </tr>
        </table>
      </div>
      <div className={style.container_wrapDiagram}>
        <div className={style.container_wrapDiagram_right}>
          <div
            className={style.container_wrapDiagram_right_up}
            style={{ marginBottom: "5px" }}
          >
            <div className={style.container_wrapDiagram_right_img}>
              <img
                style={{ marginTop: "10px" }}
                src={diagram12}
                alt="diagram12"
                layout="intrinsic"
              />
              <img
                style={{ width: "37px", height: "35px" }}
                src={_12}
                alt="_12"
                layout="intrinsic"
              />
            </div>
            <p style={{ marginLeft: "24px" }}>
              Общее количество баллов менее 12. У Вашего
              <br />
              пациента хорошее здоровье. Рекомендуется
              <br />
              продолжать вести здоровый образ жизни!
            </p>
          </div>
          <div className={style.container_wrapDiagram_right_down}>
            <div className={style.container_wrapDiagram_right_img}>
              <img
                style={{ marginTop: "10px" }}
                src={diagram15_20}
                alt="diagram15_20"
                layout="intrinsic"
              />
              <img
                style={{ marginTop: "10px" }}
                src={_15_20}
                alt="_15_20"
                layout="intrinsic"
              />
            </div>
            <p style={{ marginLeft: "24px" }}>
              Общее количество баллов 15—20. Возможно, у Вашего пациента
              предиабет или сахарный диабет 2 типа. Порекомендуйте ему проверить
              уровень глюкозы
              <br />
              (сахара) в крови. Пациенту необходимо дать рекомендации по
              модификации образа жизни и при необходимости назначить лекарства
              для снижения
              <br />
              уровня глюкозы (сахара) в крови.
            </p>
          </div>
        </div>
        <div className={style.container_wrapDiagram_right}>
          <div
            className={style.container_wrapDiagram_right_up}
            style={{ marginBottom: "5px" }}
          >
            <div className={style.container_wrapDiagram_right_img}>
              <img
                style={{ marginTop: "10px" }}
                src={diagram14}
                alt="diagram14"
                layout="intrinsic"
              />
              <img
                style={{ marginTop: "10px" }}
                src={_12_14}
                alt="_12_14"
                layout="intrinsic"
              />
            </div>
            <p style={{ marginLeft: "24px" }}>
              Общее количество баллов 12—14. Возможно,
              <br />у Вашего пациента предиабет. Рекомендуется
              <br />
              изменить образ жизни.
            </p>
          </div>
          <div className={style.container_wrapDiagram_right_down}>
            <div className={style.container_wrapDiagram_right_img}>
              <img
                style={{ marginTop: "10px" }}
                src={diagram_20}
                alt="diagram_20"
                layout="intrinsic"
              />
              <img
                style={{ marginTop: "10px" }}
                src={_20}
                alt="_20"
                layout="intrinsic"
              />
            </div>
            <p style={{ marginLeft: "24px" }}>
              Общее количество баллов более 20. По всей
              <br />
              вероятности у Вашего пациента сахарный диабет
              <br />2 типа. Проверьте у него уровень глюкозы (сахара)
              <br />в крови и постарайтесь его нормализовать. Пациенту
              <br />
              необходимо дать рекомендации по модификации
              <br />
              образа жизни и назначить лекарства для контроля
              <br />
              уровня глюкозы (сахара) в крови.
            </p>
          </div>
        </div>
      </div>
      <div className={style.container_wrapButton}>
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
      </div>
    </div>
  );
};

export default Calculate;
