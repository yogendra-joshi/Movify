import React from "react";
import "../styles/css/Sidebar.css";
import Logo from "../assets/logo.png";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="Section">
      <div className="SectionDiv">
        <img src={Logo} alt="" />
        <div className="buttons">
          <div className="FilterDiv">
            <Link
              to="/"
              className="SideBtn"
              style={{
                border:
                  window.location.pathname === "/" ? "1px solid red" : "none",
              }}
            >
              Genres
            </Link>
            <Link
              to="/trending"
              className="SideBtn"
              style={{
                border:
                  window.location.pathname === "/trending"
                    ? "1px solid red"
                    : "none",
              }}
            >
              Trending
            </Link>
            <Link
              to={"/upcoming"}
              className="SideBtn"
              style={{
                border:
                  window.location.pathname === "/upcoming"
                    ? "1px solid red"
                    : "none",
              }}
            >
              Upcoming
            </Link>
            <Link
              to={"/favoritemovies"}
              className="SideBtn"
              style={{
                border:
                  window.location.pathname === "/favoritemovies"
                    ? "1px solid red"
                    : "none",
              }}
            >
              Favorites
            </Link>
          </div>
          <div className="Login">
            <button>Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}
