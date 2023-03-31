import React, { useState, useContext, useEffect } from "react";
import { UserContext, UserProvider } from "./Context";
import "./Navbar.css";
import { Navigate, useNavigate, NavLink, useLocation } from "react-router-dom";
import Popular from "./Popular/Popular";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search.js";

function Navbar() {
  const { type, setType } = useContext(UserContext);
  const { searchBar, setSearchBar } = useContext(UserContext);
  const [search, setSearch] = useState();
  console.log(type);
  function searchEngine(event) {
    setSearchBar(event);
  }
  const NavLinkCss = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#f3ce13" : "#ffffff",
    };
  };
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
      setType("movie");
    }
  }, []);
  return (
    <div>
      <div className="nav">
        <div className="nav_left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            className="logo_image"
            onClick={() => {
              navigate("/home");
              setType("movie");
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
          <NavLink to="/Search">
            <div
              className="search_container"
              // onClick={() => setMovieId("Search")}
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
          </NavLink>
        </div>
        <div className="nav_right">
          <p>IMDB Pro</p>
          <p>SignUp</p>
          <NavLink onClick={()=>{setType("movie")}} to="/NowPlaying" style={NavLinkCss} className="nav_links">
            <p>Now Playing</p>
          </NavLink>
          <NavLink onClick={()=>{setType("movie")}} to="/Popular" style={NavLinkCss} className="nav_links">
            <p>Popular</p>
          </NavLink>
          <NavLink onClick={()=>{setType("movie")}} to="/TopRated" style={NavLinkCss} className="nav_links">
            <p>Top Rated</p>
          </NavLink>
          <NavLink onClick={()=>{setType("tv")}} to="/TVPage" style={NavLinkCss} className="nav_links">
            <p>TV</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
