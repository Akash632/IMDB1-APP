import React, { useState, useContext, useEffect } from "react";
import { UserContext, UserProvider } from "./Context";
import "./Navbar.css";
import { Navigate, useNavigate, Link, useLocation } from "react-router-dom";
import Popular from "./Popular/Popular";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search.js";

function Navbar() {
  const { movieId, setMovieId } = useContext(UserContext);
  const { type, setType } = useContext(UserContext);
  const { searchBar, setSearchBar } = useContext(UserContext);
  const [search, setSearch] = useState();

  function searchEngine(event) {
    setSearchBar(event);
  }

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname == "/") {
      navigate("/home");
    }
  }, []);
  return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            // src="https://www.citypng.com/public/uploads/preview/movie-time-ticket-illustration-logo-sign-png-11663776709q4tlatahpz.png"
            className="logo_image"
            onClick={() => {
              navigate("/home");
            }}
          />
          <div className="menu_container">
            <div>
              <DehazeIcon style={{ marginTop: 5 }} />
            </div>
            <div className="menu_text_container">
              <p className="menu_text" style={{ fontWeight: "bold" }}>
                Menu
              </p>
            </div>
          </div>
          <Link to="/Search">
            <div
              className="search_container"
              onClick={() => setMovieId("Search")}
            >
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => searchEngine(e.target.value)}
              />
              <SearchIcon
                style={{ color: "grey", fontSize: 30, marginTop: 2 }}
              />
            </div>
          </Link>
        </div>
        <div className="nav_right">
          <p>IMDB Pro</p>
          <p>SignUp</p>
          <Link activeClassName="active"
            to="/NowPlaying"
            style={{ textDecoration: "none", color: "white", marginLeft: 30 }}
          >
            <p className="nav_item" onClick={() => setMovieId("NowPlaying")}>
              Now Playing
            </p>
          </Link>
          <Link activeClassName="active"
            to="/Popular"
            style={{ textDecoration: "none", color: "white", marginLeft: 30 }}
          >
            <p className="nav_item" onClick={() => setMovieId("Popular")}>Popular</p>
            </Link>
          <Link activeClassName="active"
            to="/TopRated"
            style={{ textDecoration: "none", color: "white", marginLeft: 30 }}
          >
            <p className="nav_item" onClick={() => setMovieId("TopRated")}>Top Rated</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
