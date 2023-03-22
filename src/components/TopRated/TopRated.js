import React, { useState, useEffect,useContext} from "react";
import '../CardList.css';
import CardClass from "../CardClass";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function TopRated() {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(1);

  
  function pageCount(){
    if(page===0){
      document.getElementById("lessBtn").classList.add("disabledBtn")
    }
    else{
      setPage(page-1);
    }
  }

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
      <h1 className="page_title"><span>Top </span>Rated</h1>
      <div className="cards_main">
        {value.map((movie) => (
          <CardClass
          id={movie.id}
          moviepath={movie.poster_path}
          moviename={movie.original_title}
          moviedescription={movie.overview}
        />
        ))}
      </div>
      <div className="card_button">
      <button className="card_button_" id="lessBtn" onClick={pageCount}>
          <KeyboardDoubleArrowLeftIcon />
        </button>
        <button className="card_button_" onClick={() => setPage(page + 1)}>
          <KeyboardDoubleArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default TopRated;