import React, { useEffect, useState } from "react";
import "../styles/css/UpcomingMovies.css";
import Sidebar from "../Sidebar/Sidebar";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const apiKey = "c8c4584b71f4725dcf1d5403ef5dbf02";
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`
    );
    const data = await response.json();
    setUpcomingMovies((prev) => [...prev, ...data.results]);
  };
  // console.log(upcomingMovies);

  const handelInfiniteScroll = async () => {
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
    fetchMovies();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <div className="upcomingMain">
      <Sidebar />
      <div className="heading">
        <h2>Upcoming Movies</h2>
        <div className="moviesList">
          {upcomingMovies.map((movie, index) => (
            <MoviesCard key={`${movie.id}-${index}`} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
