import React, { useEffect, useState } from "react";
import "../styles/css/Searchbar.css";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const apiKey = "c8c4584b71f4725dcf1d5403ef5dbf02";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (query.trim() !== "") {
      handleSearch();
    }
  }, [query]);

  console.log(results);

  return (
    <section className="section">
      <div className="SectionDiv">
        <input
          className="SearchBox"
          type="text"
          placeholder="Search Movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {results.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
