import React from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";
import Moviesection from "./Moviesection/Moviesection.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* <Sidebar /> */}
      <div className="main">
        <Searchbar />
        <Moviesection />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
