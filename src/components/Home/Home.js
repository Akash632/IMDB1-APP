import React, { useContext, useEffect } from "react";
import { UserContext, UserProvider } from "../Context";
import TVcard from "../TV/TVcard";
// import News from './News';
import Carousal from "./Carousal";
// import Footer from './Footer';
import LatestHome from "./LatestTrends/LatestHome";
import News from "./News";
import "./Home.css";
// import TopScroll from './TopScroll';

function Home() {
  const { type, setType } = useContext(UserContext);
  useEffect(() => {
    setType("movie");
  }, []);
  return (
    <div className="slider_container">
      <Carousal />
      {/* <TopScroll/> */}
      <LatestHome />
      {/* <News/> */}
      {/* <Footer/> */}
      <TVcard />
      <News />
    </div>
  );
}

export default Home;
