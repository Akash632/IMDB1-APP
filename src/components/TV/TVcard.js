import React,{useState,useEffect} from 'react';
import CardClass from '../CardClass';
import '../CardList.css';
import { Navigate,useNavigate } from 'react-router-dom';
function TVcard() {
    const navigate = useNavigate();
    const[data,setData]=useState([]);

    async function tvApi(){
        let response =await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=1`);
        let datavalues = await response.json();
        setData(datavalues.results);
        // console.log(data);
    }

    useEffect(()=>{
        tvApi();
    },[]);
  return (
    <div className="tv_section">
    <h1 className="page_title_tv" onClick={()=>navigate('/TVPage')}><span>Tv </span>Shows</h1>
      <div className="card_page">
      <div className="cards_main">
        {data.slice(0,8).map((movie) => (
          <CardClass
          id={movie.id}
          moviepath={movie.poster_path}
          moviename={movie.original_title}
          moviedescription={movie.overview}
        />
        ))}
      </div>
    </div>
    </div>
    // <h1>Hello</h1>
  );
}

export default TVcard;
