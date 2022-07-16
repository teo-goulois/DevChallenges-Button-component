import React, { useState } from "react";
import "./style.scss";
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("inputs");
  return (
    <div className="sidebar">
      <h2>
        <span>Dev</span>
        challenge.io
      </h2>
      <ul>
        <li
          onClick={() => setActiveLink("colors")}
          className={`${activeLink === "colors" && "active"}`}
        >
          Colors
        </li>
        <li
          onClick={() => setActiveLink("typography")}
          className={`${activeLink === "typography" && "active"}`}
        >
          Typography
        </li>
        <li
          onClick={() => setActiveLink("spaces")}
          className={`${activeLink === "spaces" && "active"}`}
        >
          Spaces
        </li>
        <li
          onClick={() => setActiveLink("buttons")}
          className={`${activeLink === "buttons" && "active"}`}
        >
          Buttons
        </li>
        <li
          onClick={() => setActiveLink("inputs")}
          className={`${activeLink === "inputs" && "active"}`}
        >
          Inputs
        </li>
        <li
          onClick={() => setActiveLink("grid")}
          className={`${activeLink === "grid" && "active"}`}
        >
          Grid
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
