import React from "react";
import "../globals.css";

const FooterComponent = () => {
  return (
    <footer class="footerFooter">
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2023 Carlson Team | All Rights Reserved</p>

      <script
        type="module"
        defer
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        defer
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </footer>
  );
};

export default FooterComponent;
