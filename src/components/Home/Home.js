import React from 'react';
import TVcard from '../TV/TVcard';
// import News from './News';
import Carousal from './Carousal';
// import Footer from './Footer';
import LatestHome from './LatestTrends/LatestHome';
import News from './News';
// import TopScroll from './TopScroll';

function Home() {
  return (
    <div className="slider_container">
      <Carousal/>
      {/* <TopScroll/> */}
      <LatestHome/>
      {/* <News/> */}
      {/* <Footer/> */}
      <TVcard/>
      <News/>
    </div>
  );
}

export default Home;
