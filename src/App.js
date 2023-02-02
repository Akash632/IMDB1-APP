import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cards from './components/NowPlaying/Cards';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Navbar from './components/Navbar';
import Popular from './components/Popular/Popular';
import TopRated from './components/TopRated/TopRated';
import Carousal from './components/Home/Carousal';
import Home from './components/Home/Home';

function App() {
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
      </BrowserRouter>
    </div>
  );
}

export default App;
