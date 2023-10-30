import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Searchbar from "../src/Searchbar/Searchbar.jsx";
import Sidebar from "../src/Sidebar/Sidebar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Searchbar /> */}
    <Sidebar />
  </React.StrictMode>
);
