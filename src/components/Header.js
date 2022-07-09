import React, { useState } from "react";
import "./styles/Header.css";
import { Close, MenuOutlined } from "@material-ui/icons";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="header">
      <div className="logo">
        <h1>REYMAR</h1>
      </div>

      <nav className={active ? "navbar active" : "navbar"}>
        <ul>
          <div className="closed">
            <Close className="close" onClick={showMenu} />
          </div>

          <li>
            <HashLink smooth to="/#main">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#experience">
              Experience
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>

      <div className="changer">
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
    </div>
  );
};

export default Header;
