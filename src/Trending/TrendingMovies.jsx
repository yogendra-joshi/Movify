import React, { useEffect, useState } from "react";
import "../styles/css/TrendingMovies.css";
import MoviesCard from "../MoviesCard";
import Sidebar from "../Sidebar/Sidebar";

function TrendingMovies() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const apiKey = "c8c4584b71f4725dcf1d5403ef5dbf02";
  const currentDay = new Date().getDay();
  const timeWindow = currentDay === 0 ? "week" : "day";
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}&page=${page}`
    );
    const data = await response.json();
    setTrendingMovies((prev) => [...prev, ...data.results]);
  };
  console.log(trendingMovies);

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
    <div className="trendingMain">
      <Sidebar />
      <div className="heading">
        <h1>Trending Movies</h1>
        <div className="moviesList">
          {trendingMovies.map((movie) => (
            <div className="head">
              <MoviesCard key={movie.id} movie={movie} />
              {/* <p>{movie.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TrendingMovies;
