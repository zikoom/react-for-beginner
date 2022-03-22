import "./App.css";

import Movie from "./Movie";

import { useState, useEffect } from "react";

function App() {
  console.log("app lendered");

  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const movieURL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year";

  useEffect(async () => {
    let response = await (await fetch(movieURL)).json();
    response = response.data.movies;

    console.log("받아온 영화 데이터: ", response);
    setMovieList(() => response.map((movie) => movie));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Movies!</h1>
      {isLoading ? <strong> 로딩중 ...</strong> : <Movie movieList={movieList} />}
    </div>
  );
}

export default App;
