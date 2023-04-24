import React, { useContext } from "react";
import { UserContext, userProvider } from "../Context";
import { Navigate,useNavigate } from "react-router-dom";
import './Homecard.css'

export default function CardClass(props) {
  const { type, setType } = useContext(UserContext);
  const navigate=useNavigate();
  // console.log(movieId);
  function onClick(){
    if(type === "movie"){
      navigate(`/movie/${props.id}`);
    }
    else {
      navigate(`/tv/${props.id}`);
    }
  }
  // console.log(props.moviename);
  return (
    <div onClick={onClick}>
          <div className="card_image">
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.moviepath}`}/>
          </div>
          <div className="card_description">
            {/* <h4>{props.moviename}</h4> */}
            {/* <p>{props.moviedescription.slice(0, 50) + "..."}</p> */}
          </div>
    </div>
  );
}
