import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import Sidebar from "../src/Sidebar/Sidebar.jsx";
import Searchbar from "./Searchbar/searchbar";
import Moviesection from "./Moviesection/moviesection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <Sidebar />
      <div className="main">
        <Searchbar />
        <Moviesection />
      </div>
    </div>
  </React.StrictMode>
);
