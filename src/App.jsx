import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import Sidebar from "./Sidebar/Sidebar.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";
import Moviesection from "./Moviesection/Moviesection.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="app">
      <Sidebar className= "sidebar" />
      <div className="main">
        <Searchbar />
        <Moviesection /> 
      </div>
    </div>
  </React.StrictMode>
);
