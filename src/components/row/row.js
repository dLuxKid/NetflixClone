import React, { useState, useEffect } from "react";
import "./row.css";
import instance from "../../axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  // storing the movie state
  const [movie, setMovie] = useState([]);

  //requesting the movie data on loading the app
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchURL);
      setMovie(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* rendering the movie images */}
        {movie.map((movie) => (
          <img
            className={`${isLargeRow ? "row-images-large" : "row-images"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {}
    </div>
  );
};

export default Row;
