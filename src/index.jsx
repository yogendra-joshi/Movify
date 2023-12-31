import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrendingMovies from "./Trending/TrendingMovies.jsx";
import UpcomingMovies from "./Upcoming/UpcomingMovies.jsx";
import FavoriteMovies from "./Favorites/FavoriteMovies.jsx";
import Searchbar from "./Searchbar/Searchbar.jsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/searchbar" element={<Searchbar />} />
      <Route path="/trending" element={<TrendingMovies />} />
      <Route path="/upcoming" element={<UpcomingMovies />} />
      <Route path="/favoritemovies" element={<FavoriteMovies />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
