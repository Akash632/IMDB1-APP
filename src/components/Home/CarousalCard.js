import React,{useContext}from 'react';
import { UserContext,UserProvider } from '../Context';
import { Navigate,useNavigate } from "react-router-dom";
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function CarousalCard(props) {
    const { movieId, setMovieId } = useContext(UserContext);
const navigate=useNavigate();
    function onClick(){
        setMovieId("Carousal")
        navigate(`/${movieId}/${props.movieid}`);
      }
  return (
    <div>
        <div className="carousal_container" key={props.id} onClick={onClick}>
          <img src={`https://image.tmdb.org/t/p/original${props.poster}`} 
          className="carousal_Image"
          />
          <div className="carousal_text_section">
          <h1 className="carousal_text">{props.title}</h1>
          <p>{props.overview}</p>
          <div className="play_button_section">
            <div>
            <PlayArrowIcon style={{fontSize:45,marginTop:3}}/>
            </div>
            <h3 className="play_button">Play</h3>
          </div>
          </div>
        </div>
    </div>
  );
}

export default CarousalCard;
