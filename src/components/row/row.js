import React, { useState, useEffect } from "react";
import "./row.css";
import instance from "../../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchURL, isLargeRow }) => {
  // storing the movie state
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  //requesting the movie data on loading the app
  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchURL);
      setMovie(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  //   var video_id = window.location.search.split('v=')[1];
  // var ampersandPosition = video_id.indexOf('&');
  // if(ampersandPosition != -1) {
  //   video_id = video_id.substring(0, ampersandPosition);
  // }

  //function to fetch the movie clicked
  const handleClick = (movie) => {
    // if a movie trailer is playing it closes it
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //fetching the movie trailer from youtube
      movieTrailer(movie?.name || "", { id: true })
        .then((url) => {
          //synatx to get the url of movie from youtube
          const VideoKey = new URLSearchParams(new URL(url).search);
          // this gets the id of the movie from the youtube link
          setTrailerUrl(VideoKey.get("v"));
        })
        .catch((error) => {});
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="row-container">
      <h2>{title}</h2>
      <div className="row-posters">
        {/* rendering the movie images */}
        {movie.map((movie) => (
          <img
            onClick={handleClick(movie)}
            className={`${isLargeRow ? "row-images-large" : "row-images"}`}
            key={movie.id}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
