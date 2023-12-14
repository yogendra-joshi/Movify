import React, { useEffect, useState } from "react";
import "../styles/css/Moviesection.css";

export default function Moviesection() {
  const [movieList, setMovieList] = useState([]);
  const [genresList, setGenresList] = useState([]);
  const [page, setPage] = useState(1);
  const apiKey = "c8c4584b71f4725dcf1d5403ef5dbf02";

  const fetchGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    );
    const data = await response.json();
    setGenresList(data.genres);
  };

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`
    );
    const data = await response.json();
    // setMovieList(data.results);
    setMovieList((prev) => [...prev, ...data.results]);
  };

  const handelInfiniteScroll = async () => {
    console.log("scrollHeight" + document.documentElement.scrollHeight);
    console.log("innerHeight" + window.innerHeight);
    console.log("scrollHeight" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(movieList);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <section className="movieSection">
      <div className="movieGenres">
        <h2 className="heading">Movie Genres</h2>
        <div className="genresList">
          {genresList.map((genre) => (
            <button key={genre.id}>{genre.name}</button>
          ))}
        </div>
      </div>

      <div className="moviesList">
        {movieList.map((movie) => (
          <div className="movies" key={movie.id}>
            <img
              className="movieImg"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            {/* <p>{movie.title}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
