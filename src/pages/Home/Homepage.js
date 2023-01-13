import React from "react";
import Banner from "../../components/banner/banner";
import Row from "../../components/row/row";
import requests from "../../requests";

const Homepage = () => {
  return (
    <main>
      <Banner />
      <Row
        title="dLuxKidtv's Choices"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Upcoming Movies" fetchURL={requests.fetchUpcoming} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <div className="grey_div"></div>
    </main>
  );
};

export default Homepage;
