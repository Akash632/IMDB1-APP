import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./Context";
import CardClass from "./CardClass";
import './CardList.css';
import './Search.css';

function Search(props) {
  const { searchBar } = useContext(UserContext);
  const [searchResult, setSearchResult] = useState([]);
  async function searchApi() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&query=${searchBar}&page=1&include_adult=false`
    );
    const data = await response.json();
    // console.log(data.results);
    setSearchResult(data.results);
    // console.log(data.results);
  }
  useEffect(() => {
    searchApi();
  }, [searchBar]);
  return (
    <div className="card_page">
        <div className="cards_main">
      {searchResult?searchResult.map((value) => (
        <CardClass 
        id={value.id}
        moviepath={value.poster_path}
        moviename={value.original_title}
        moviedescription={value.overview}
        />
      )):<div className="search-image">
      <div>
        <img src="https://icon-library.com/images/negative-search-cinema-movies-photography-512.png"/>
        </div>
        </div>
        }
    </div>
    </div>
  );
}

export default Search;
