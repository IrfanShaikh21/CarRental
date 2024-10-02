import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-Container">
      <div className="navbar-logo-name">
        <p>Car-Rent</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/carlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Car-list
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-login">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <NavLink
          to="/card"
          style={{ textDecoration: "none", color: "white" }}
        ></NavLink>
      </div>
    </div>
  );
}

export default Navbar;
