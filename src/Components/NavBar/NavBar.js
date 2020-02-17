import React from "react";
import Logo from "../../logo.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
  return (
    <div class="NavBar">
        <div class="logo-website-name">
      <img src={Logo} />
      <div class="AdoptMe">AdoptMe.org</div>
      </div>
      <ul class="nav justify-content-end NavBarLinks">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            WHAT we do
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            WHO we are
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            ADOPTION events
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
