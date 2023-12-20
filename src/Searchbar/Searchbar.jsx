import React, { useEffect, useState } from "react";
import "../styles/css/Searchbar.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const apiKey = "c8c4584b71f4725dcf1d5403ef5dbf02";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResults((prev) => [...prev, ...data.results]);
    } catch (error) {
      console.error("Error:", error);
    }
    // navigate("/searchbar");
  };

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

  const searchPage = () => {
    return navigate("/searchbar");
  };

  useEffect(() => {
    setResults([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    handleSearch();
  }, [page]);

  useEffect(() => {
    if (query.trim() !== "") {
      handleSearch();
      // navigate("/searchbar");
    } else {
      setQuery("");
      setResults([]);
    }
  }, [query]);

  console.log(query);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <section className="section">
      <div className="sectionDiv">
        <input
          type="text"
          placeholder="Search Movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onClick={searchPage}
        />
      </div>

      <div className="SearchSection">
        <Sidebar />

        <div className="SearchList">
          {results.map((movie, index) => (
            <MoviesCard key={`${movie.id}-${index}`} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
