import React from "react";

const MoviesCard = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      {/* <p>{movie.title}</p> */}
    </div>
  );
};

export default MoviesCard;
