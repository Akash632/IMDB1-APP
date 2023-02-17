import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import './TVDetails.css';
import StarIcon from "@mui/icons-material/Star";
import CardClass from '../CardClass';

export default function TVDetails() {
    const params=useParams();
    const[tvData,setTvData]=useState({});
    const[genre,setGenre]=useState([]);
    const[seasons,setSeasons]=useState([]);
    // console.log(params);
    async function tvApi(){
        let url=`https://api.themoviedb.org/3/tv/${params.id}?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US`;
        let response = await fetch(url);
        let data = await response.json();
        setTvData(data);
        setGenre(data.genres);
        setSeasons(data.seasons);
        // console.log(data);
        console.log(tvData);
    }
useEffect(()=>{
    tvApi();
},[])
 const{
    backdrop_path,
    first_air_date,
    homepage,
    name,
    original_name,
    overview,
    popularity,
    poster_path,
    tagline,
    vote_average,
    vote_count
 }=tvData

 console.log(first_air_date);
 console.log(homepage);
 console.log(name);
 console.log(original_name);
 console.log(overview);
 console.log(backdrop_path);
//  console.log(backdrop_path);
  return (
    <div>
        <div className="movie">
      <div className="movie_intro">
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      </div>
      <div className="movie_detail">
        <div className="movie_detailleft">
          <div className="movie_posterbox">
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
            />
          </div>
        </div>
        <div className="movie_detailright">
          <div className="movie_detailrighttop">
            <div className="movie_name">{original_name}</div>
            <div className="movie_tagline">{tagline}</div>
            <div className="movie_rating_container">
              <div className="movie_ratingaverage">({vote_average})</div>
              <StarIcon />
              <div className="movie_line">|</div>
              <div className="movie_rating">{vote_count}</div>
            </div>
            {/* <div className="movie_runtime">Run Time: {runtime} mins</div> */}
            <div className="movie_releasedate">
             First Air: {first_air_date}
            </div>
            <div className="movie_genres">
              {genre.map((value) => (
                <p className="movie_genre">{value.name}</p>
              ))}
            </div>
          </div>
          <div className="movie_detailrightbottom">
            <div className="overview_container">
              <div className="synopsistext">Overview</div>
              <div className="anchor_button">
              <a href={homepage} target="_blank" className="movie_link">
                Watch Movie
              </a>
              </div>
            </div>
            <div>{overview}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="card_page cards_recommendations">
      <h1 className="page_title">Recommendations</h1>
      <div className="cards_main">
        {seasons.map((seasons) => (
          <CardClass
          id={seasons.id}
          moviepath={seasons.poster_path}
          moviename={seasons.original_title}
          moviedescription={seasons.overview}
        />
        ))}
      </div>
    </div>
    </div>
  );
}
