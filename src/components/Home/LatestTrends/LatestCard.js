import React, { useContext } from "react";
// import { UserContext, userProvider } from ".src/components/Context";
import { UserContext,userProvider } from "../../Context";
import { Navigate,useNavigate } from "react-router-dom";
export default function LatestCard(props) {
  const { movieId, setMovieId } = useContext(UserContext);
  const navigate=useNavigate();

  function onClick(){
    navigate(`/${movieId}/${props.movieId}`);
  }
  return (
    <div onClick={onClick}>
        <div
          className="card_container"
        >
          <div className="card_image">
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.movieImage}`}/>
          </div>
          <div className="card_description">
            <h4>{props.movieHeading}</h4>
            <p>{props.moviedescription.slice(0, 50) + "..."}</p>
          </div>
        </div>
    </div>
  );
}
