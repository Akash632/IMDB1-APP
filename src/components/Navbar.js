import React ,{useContext}from "react";
import { UserContext,UserProvider } from "./Context";
import './Navbar.css';
import {Navigate,useNavigate,Link} from 'react-router-dom';
import Popular from "./Popular/Popular";
function Navbar() {
  const { movieId, setMovieId } = useContext(UserContext);
  const{type,setType}=useContext(UserContext);

  const navigate = useNavigate();
  console.log(movieId);
  return (
    <div>
    <div className="nav">
      <div className="nav_left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" 
        className="logo_image"
        onClick={()=>{navigate("/home")}}/>
        <input type="text" placeholder="Search"/>
        </div>
        <div className="nav_right">
          <Link to="/NowPlaying" style={{textDecoration:"none" ,color:"white",marginLeft:30}}>
          <p onClick={setMovieId("NowPlaying")}>Now Playing</p>
          </Link>
          <Link to="/Popular" style={{textDecoration:"none",color:"white",marginLeft:30}}>
          <p onClick={setMovieId("Popular")}>Popular</p>
          </Link>
          <Link to="/TopRated" style={{textDecoration:"none",color:"white",marginLeft:30}}>
          <p onClick={setMovieId("TopRated")}>Top Rated</p>
          </Link>
      </div>
    </div>
    <hr/>
    </div>
  );
}

export default Navbar;