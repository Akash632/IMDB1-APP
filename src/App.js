import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import Cards from './components/NowPlaying/Cards';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Navbar from './components/Navbar';
import Popular from './components/Popular/Popular';
import TopRated from './components/TopRated/TopRated';
import Carousal from './components/Home/Carousal';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Git from './components/Git';

function App() {
  // const location = useLocation();
  // useEffect(()=>{
  //   console.log(location.pathname);
  // },[]);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/NowPlaying" element={<Cards/>}/>
        <Route exact path="/Popular" element={<Popular/>}/>
        <Route exact path="/TopRated" element={<TopRated/>}/>
        <Route exact path="/:type/:id" element={<MovieDetails/>}/>
      </Routes>
      <Footer/>
      <Git/>
      </BrowserRouter>
    </div>
  );
}

export default App;
