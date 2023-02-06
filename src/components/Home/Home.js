import React from 'react';
// import News from './News';
import Carousal from './Carousal';
// import Footer from './Footer';
import LatestHome from './LatestTrends/LatestHome';
// import TopScroll from './TopScroll';

function Home() {
  return (
    <div className="slider_container">
      <Carousal/>
      {/* <TopScroll/> */}
      <LatestHome/>
      {/* <News/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
