import React from "react";
import "./header.scss";
import NavBar from "../../navBar";
import pana1 from "../../images/pana1.png";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header>
      <NavBar />
      <div className="container">
        <div className="content">
          <h1>{t("title")}</h1>
          <p>{t("content")}</p>
          <button>{t("btn")}</button>
        </div>
        <img src={pana1} alt="pana1" />
      </div>
    </header>
  );
}

export default Header;
