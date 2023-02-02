import React,{useState,useEffect,useContext} from 'react';
import { UserContext,UserProvider } from '../Context';
import { Navigate,useNavigate } from "react-router-dom";
import './Carousal.css';
import Slider from "react-slick";
import { style } from '@mui/system';
import { Link } from 'react-router-dom';
import CarousalCard from './CarousalCard';

function Carousal(props) {
  const[value,setValue]=useState([]);
  const { movieId, setMovieId } = useContext(UserContext);
  const navigate=useNavigate();
  const [idmovie, setIdmovie] = useState();


  async function fetchApi() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=9b48421e56beff9d0381692f8b0ee7d7&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    setValue(data.results);
  }
  useEffect(() => {
    fetchApi();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplayspeed:4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div className="carousal">
      <Slider {...settings}>
        {value.slice(0,10).map((carousaldata)=>(
             <CarousalCard
          key={carousaldata}
          movieid={carousaldata.id}
          poster={carousaldata.backdrop_path}
          title={carousaldata.original_title}
          overview={carousaldata.overview}
          />
        ))}
        </Slider>
    </div>
    </div>
  );
}

export default Carousal;
