import React, { useEffect, useState } from "react";
import "../styles/css/Moviesection.css";

export default function Moviesection() {
  const [movieList, setMovieList] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const apiKey = "c8c4584b71f4725dcf1d5403ef5dbf02";

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=10`
    );
    const data = await response.json();
    setMovieList(data.results);
  };

  const fetchGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    );
    const data = await response.json();
    setGenresList(data.genres);
  };

  console.log(movieList);
  console.log(genresList);

  return (
    <section className="MovieSection">
      <div className="MovieSectionDiv">
        <div className="MovieGenres">
          <h2 className="Heading">Movie Genres</h2>
          <div className="GenresList">
            {genresList.map((genre) => (
              <button key={genre.id}>{genre.name}</button>
            ))}
          </div>
        </div>
        <div>
          {movieList.map((movie) => (
            <div className="Movies">
              <img
                className="MovieImg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
