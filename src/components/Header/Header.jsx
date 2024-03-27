import React from "react";
import style from "./header.module.css";
import banner1 from "../../assets/баннер 1.svg";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.container_header}></div>
      <div className={style.container_wrap}>
        <p className={style.container_wrap_text}>
          Тест для оценки риска развития сахарного диабета 2 типа (шкала
          FINDRISC)
        </p>
      </div>
      <div className={style.container_wrap}>
        <img
          className={style.banner1}
          src={banner1}
          alt="banner1"
          layout="intrinsic"
        />
      </div>
    </div>
  );
};

export default Header;
