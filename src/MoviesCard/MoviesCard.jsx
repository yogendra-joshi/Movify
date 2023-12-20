import React from "react";
import "../styles/css/MoviesCard.css";

const MoviesCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="title-overlay">
        <p>{movie.title}</p>
      </div>
    </div>
  );
};

export default MoviesCard;
