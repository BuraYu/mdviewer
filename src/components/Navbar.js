import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [colorScheme, setColorScheme] = useState("light");

  const changeColorScheme = () => {
    colorScheme === "light" ? setColorScheme("dark") : setColorScheme("light");
  };

  return (
    <div className="navbar">
      <nav className="navbar--container">
        <span className="navbar--title">MDViwer</span>
        <label class="switch" onChange={changeColorScheme}>
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>{" "}
      </nav>
      <div className="items--container">
        <ul>
          <li>
            <a href="#">Title numero uno</a>
          </li>
          <li>
            <a href="#">Title numero dos</a>
          </li>
          <li>
            <a href="#">Title numero tres</a>
          </li>
          <li>
            <a href="#">Title numero quatro</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
