import React from "react";
import "../styles/css/Sidebar.css";
import Logo from "../assets/logo.png";

export default function Sidebar() {
  return (
    <section className="Section">
      <div className="SectionDiv">
        <img src={Logo} alt="" />
        <div className="buttons">
          <div className="FilterDiv">
            <button className="SideBtn">Genres</button>
            <button className="SideBtn">Trending</button>
            <button className="SideBtn">Upcoming</button>
            <button className="SideBtn">Favorites</button>
          </div>
          <div className="Login">
            <button>Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}
