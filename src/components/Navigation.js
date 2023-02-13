import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 1</li>
            </NavLink>
            <NavLink
              to="/projet2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 2</li>
            </NavLink>
            <NavLink
              to="/projet3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 3</li>
            </NavLink>
            <NavLink
              to="/projet4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Projet 4</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
