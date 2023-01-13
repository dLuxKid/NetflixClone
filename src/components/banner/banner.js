import React, { useState, useEffect } from "react";
import "./banner.css";
import instance from "../../axios";
import requests from "../../requests";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  // fetching the movie once the page load for the banner
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(requests.fetchTrending);
      let index = Math.floor(Math.random() * request.data.results.length - 1);
      setMovies(request.data.results[index]);
      return request;
    };
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }

  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner-container">
        <h1>{movies?.name || movies?.title || movies?.original_name}</h1>
        <div className="button-container">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p>{truncate(movies?.overview, 200)}</p>
      </div>
      <div className="fade-bottom"></div>
    </header>
  );
};

export default Banner;
