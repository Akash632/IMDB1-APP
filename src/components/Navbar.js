import React, { useContext } from "react";
import { UserContext, UserProvider } from "./Context";
import "./Navbar.css";
import { Navigate, useNavigate, Link } from "react-router-dom";
import Popular from "./Popular/Popular";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const { movieId, setMovieId } = useContext(UserContext);
  const { type, setType } = useContext(UserContext);

  const navigate = useNavigate();
 return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            className="logo_image"
            onClick={() => {
              navigate("/home");
            }}
          />
          <div className="menu_container">
            <div>
            <DehazeIcon style={{marginTop:5}}/>
            </div>
            <div className="menu_text_container">
            <p className="menu_text" style={{fontWeight:"bold"}}>Menu</p>
            </div>
          </div>
          <div className="search_container">
          <input type="text" placeholder="Search" />
          <SearchIcon style={{color:"grey",fontSize:30,marginTop:2}}/>
          </div>
        </div>
        <div className="nav_right">
          <Link
            to="/NowPlaying"
            style={{ textDecoration: "none", color: "white", marginLeft: 30 }}
          >
            <p className="nav_item">Now Playing</p>
          </Link>
          <Link
            to="/Popular"
            style={{ textDecoration: "none", color: "white", marginLeft: 30 }}
          >
            <p onClick={setMovieId("Popular")}>Popular</p>
          </Link>
          <Link
            to="/TopRated"
            style={{ textDecoration: "none", color: "white", marginLeft: 30 }}
          >
            <p onClick={setMovieId("TopRated")}>Top Rated</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
