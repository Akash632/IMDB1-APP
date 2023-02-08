import React,{useState,useEffect} from 'react';
import '../CardList.css';
import CardClass from '../CardClass';
function Recommendations(props) {

    const[data,setData]=useState([]);

    async function apicall(){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/recommendations?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=1`)
        const data = await response.json();
        setData(data.results);
        // console.log(data);
    }
    useEffect(()=>{
        apicall();
    },[]);

  return (
    <div className="card_page cards_recommendations">
      <h1 className="page_title">Recommendations</h1>
      <div className="cards_main">
        {data.slice(0,5).map((movie) => (
          <CardClass
          id={movie.id}
          moviepath={movie.poster_path}
          moviename={movie.original_title}
          moviedescription={movie.overview}
        />
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
