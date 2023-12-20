import React from "react";
import "../styles/css/FavoriteMovies.css";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function FavoriteMovies() {
  return (
    <div>
      <Sidebar />
      <div className="headingDiv">
        <h1 className="Heading">Favorite Movies</h1>
        <h4 className="Heading">No Bookmark Yet!</h4>
      </div>
    </div>
  );
}
