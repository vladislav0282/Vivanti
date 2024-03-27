import React from "react";
import style from "./footer.module.css";
import icon_contacts from "../../assets/icon_contacts.svg";
import icon_location from "../../assets/icon_location.svg";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.container_group}>
        <p className={style.container_group_p1}>СВЯЖИТЕСЬ С НАМИ</p>
        <div className={style.container_group_phone}>
          <img
            className={style.icon_contacts}
            src={icon_contacts}
            alt="icon_contacts"
            layout="intrinsic"
          />
          <p className={style.container_group_p1}>Телефон</p>
        </div>
        <div className={style.container_group_location}>
          <img
            className={style.icon_location}
            src={icon_location}
            alt="icon_location"
            layout="intrinsic"
          />
          <p className={style.container_group_p1}>Адрес</p>
        </div>
        <div className={style.container_group_site}>
          <p className={style.container_group_p1}>© 2023 site.RU </p>
          <p className={style.container_group_p1}>Все права защищены</p>
        </div>
        <p className={style.container_group_p2}>
          Дата последнего обновления сайта: 07.02.2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
