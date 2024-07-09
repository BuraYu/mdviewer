import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [colorScheme, setColorScheme] = useState("light");

  const changeColorScheme = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = colorScheme;
  }, [colorScheme]);

  return (
    <div className={`navbar ${colorScheme}`}>
      <nav className="navbar--container">
        <span className="navbar--title">MDViewer</span>
        <label className="switch">
          <input type="checkbox" onChange={changeColorScheme} />
          <span className="slider round"></span>
        </label>
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
