import React, { useContext } from "react";
import { UserContext, UserProvider } from "../Context";
import { Navigate, useNavigate } from "react-router-dom";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function CarousalCard(props) {
  const { type, setType } = useContext(UserContext);
  const navigate = useNavigate();
  function onClick() {
    navigate(`/movie/${props.movieid}`);
    console.log(type);
  }
  return (
    <div>
      <div className="carousal_container" key={props.id} onClick={onClick}>
        <img
          src={`https://image.tmdb.org/t/p/original${props.poster}`}
          className="carousal_Image"
        />
        <div className="carousal_text_section">
          <div className="heading_container">
            <h1 className="carousal_text">{props.title}</h1>
            <p className="carousal_overview">{props.overview}</p>
          </div>
          <div className="play_button_section">
            <div>
              <PlayArrowIcon style={{fontSize: 60}} />
            </div>
            {/* <h1 className="play_button">Play</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarousalCard;
