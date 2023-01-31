import React, { useState, useEffect,useContext} from "react";
import "./TopRated.css";
import CardClass from "../CardClass";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
function TopRated() {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchApi() {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setValue(data.results);
    // console.log(data.results);
    // console.log(value);
  }
  useEffect(() => {
    fetchApi();
  }, [page]);

  return (
    <div className="card_page">
      <h1 className="page_title">Top Rated Movies</h1>
      <div className="cards_main">
        {value.slice(0,18).map((movie) => (
          <CardClass
          id={movie.id}
          moviepath={movie.poster_path}
          moviename={movie.original_title}
          moviedescription={movie.overview}
        />
        ))}
      </div>
      <div className="card_button">
        <button className="card_button_" onClick={() => setPage(page + 1)}>
          <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default TopRated;