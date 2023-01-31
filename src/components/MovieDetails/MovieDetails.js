import React, { useState, useEffect } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export default function MovieDetails() {
  const params = useParams();

  const [data, setData] = useState({});
  const [genres, setGenres] = useState([]);

  async function DetailsApi() {
    let url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
    setGenres(data.genres);
  }

  useEffect(() => {
    DetailsApi();
  }, []);

  const {
    backdrop_path,
    homepage,
    original_title,
    overview,
    poster_path,
    release_date,
    tag_line,
    vote_average,
    vote_count,
    runtime,
  } = data;
  // let {belongs_to_collection:{id,name,poster_path},}=data;
  return (
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
            <div className="movie_name">{original_title}</div>
            <div className="movie_tagline">{tag_line}</div>
            <div className="movie_rating_container">
              <div className="movie_ratingaverage">({vote_average})</div>
              <StarIcon />
              <div className="movie_line">|</div>
              <div className="movie_rating">{vote_count}</div>
            </div>
            <div className="movie_runtime">Run Time: {runtime} mins</div>
            <div className="movie_releasedate">
              Release date: {release_date}
            </div>
            <div className="movie_genres">
              {genres.map((value) => (
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
      <hr/>
      <h1>Production</h1>
    </div>
  );
}
