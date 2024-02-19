import React, { useState } from "react";
import "../globals.css";
import logo from "../../../public/LOGO-STREAM_HEAVEN.png";
import img_online from "../../../public/img_online.png";
import img_offline from "../../../public/img_offline.png";

const Header = ({
  onLoginClick,
  isLoggedIn,
  onLoginSuccess,
  onLogout,
  onListFilmClick,
}) => {
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };
  return (
    <header>
      <div class="logo-nav">
        <div class="logo">
          <img src={logo.src} />
        </div>
        <nav>
          <ul class="nav">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); }}>HOME</a>
            </li>
            <li>
              <a href="#" onClick={onListFilmClick}>
                MOVIES
              </a>
            </li>
            <li>
              <a href="#" onClick={isLoggedIn ? onLogout : onLoginClick}>
                {isLoggedIn ? "LOGOUT" : "LOGIN"}
              </a>
              {isLoggedIn ? (
                <img src={img_online.src} alt="Online" />
              ) : (
                <img src={img_offline.src} alt="Offline" />
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div class="search-bar">
        <input type="search" placeholder="Cherchez ici" />
        <button>Chercher</button>
      </div>
    </header>
  );
};

export default Header;
