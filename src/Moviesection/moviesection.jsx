import React, { useEffect, useState } from "react";
import "../styles/css/Moviesection.css";
import "../MoviesCard/MoviesCard";
import MoviesCard from "../MoviesCard/MoviesCard";
import Searchbar from "../Searchbar/Searchbar.jsx";
import Sidebar from "../Sidebar/Sidebar";

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
    setMovieList((prev) => [...prev, ...data.results]);
  };
  // console.log(movieList);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollHeight" + document.documentElement.scrollTop);
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

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchMovies();
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
        <Sidebar />
        {movieList.map((movie, index) => (
          <MoviesCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
    </section>
  );
}
