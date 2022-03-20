import "./App.css";

import Movie from "./Movie";

import { useState, useEffect } from "react";

function App() {
  console.log("app lendered");

  const [isLoading, setIsLoading] = useState(true);
  const movieURL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

  let movieList = [];

  useEffect(async () => {
    movieList = await (await fetch(movieURL)).json();
    movieList = movieList.data.movies;

    console.log("받아온 영화 데이터: ", movieList);
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Movies!</h1>
      {isLoading ? <strong> 로딩중 ...</strong> : <Movie />}
    </div>
  );
}

export default App;
