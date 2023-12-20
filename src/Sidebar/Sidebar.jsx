import React from "react";
import "../styles/css/Sidebar.css";
import Logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <section className="Section">
      <div className="SectionDiv">
        <img src={Logo} alt="" />
        <div className="buttons">
          <div className="FilterDiv">
            <Link to="/" className="SideBtn">
              Genres
            </Link>
            <Link to="/trending" className="SideBtn">
              Trending
            </Link>
            <Link to={"/upcoming"} className="SideBtn">
              Upcoming
            </Link>
            <Link to={"/favoritemovies"} className="SideBtn">Favorites</Link>
          </div>
          <div className="Login">
            <button>Login</button>
          </div>
        </div>
      </div>
      <Outlet />
    </section>
  );
}
