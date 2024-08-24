import React from "react";
import "./navBar.css";
import logo from "./images/DSI-logo.png";
import flagUsa from "./images/flag-usa.png";
import flagUzbekistan from "./images/flag-uzbekistan.png";
import i18n from "./i18n";

function NavBar() {
  const changeLanguage = (lng) => {
    return () => {
      i18n.changeLanguage(lng);
    };
  };

  return (
    <div className="navContainer">
      <nav>
        <img src={logo} alt="DSI-Company." />
        <ul>
          <li>Services</li>
          <li>Product</li>
          <li>Technology</li>
          <li>About</li>
          <li>Client</li>
          <li>Partner</li>
        </ul>
        <div className="flags">
          <img src={flagUsa} alt="USA" onClick={changeLanguage("en")} />
          <img src={flagUzbekistan} alt="UZB" onClick={changeLanguage("uz")} />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
